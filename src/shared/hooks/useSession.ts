import { AuthSession } from '@supabase/supabase-js';
import { Accessor, createSignal, onMount } from 'solid-js';

import { supabase } from '~/shared/supabase';

export function useSession(): Accessor<AuthSession | null> {
  const [session, setSession] = createSignal<AuthSession | null | undefined>();

  onMount(() => {
    supabase.auth.getSession().then(({ data: { session: newSession } }) => {
      setSession(newSession);
    });

    supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
  });

  return session;
}
