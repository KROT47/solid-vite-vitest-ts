import { createQuery, CreateQueryResult } from '@tanstack/solid-query';
import { Accessor, createMemo } from 'solid-js';

import { supabase } from '~/shared/supabase';
import { useSession } from './useSession';

export function useUserProfile(): Accessor<
  CreateQueryResult<{
    username: unknown;
    website: unknown;
    avatar_url: unknown;
  }>
> {
  const session = useSession();

  const profile = createMemo(() => {
    const $session = session();
    if ($session === undefined) return undefined;
    if ($session === null) return null;

    const { user } = $session;

    return createQuery(
      () => ['profile', user.id],
      async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single();

        if (error) throw error;

        return data;
      },
    );
  });

  return profile;
}
