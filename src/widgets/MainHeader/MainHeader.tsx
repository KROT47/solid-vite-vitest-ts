import { FaSolidBars, FaSolidUser } from 'solid-icons/fa';
import { createQuery } from '@tanstack/solid-query';
import { Accessor, createMemo, createSignal, onMount, Show } from 'solid-js';
import { AuthSession } from '@supabase/supabase-js';

import { Box, Button, Divider, HStack, IconButton, Popover } from '~/shared/ui';
import { supabase } from '~/shared/supabase';
import { ModalTypes, useModals } from '~/globals/modals';
import { useI18n } from '~/globals/i18n';

function useSession(): {
  session: Accessor<AuthSession | null>;
  sessionIsLoading: Accessor<boolean>;
} {
  const [session, setSession] = createSignal<AuthSession | null>(null);

  onMount(() => {
    supabase.auth.getSession().then(({ data: { session: newSession } }) => {
      setSession(newSession);
    });

    supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
  });

  const sessionIsLoading = createMemo(() => session() === null);

  return { session, sessionIsLoading };
}

export function MainHeader(): JSXElement {
  const { t } = useI18n();
  const { session, sessionIsLoading } = useSession();

  const { openModal } = useModals();

  const profile = createMemo(() => {
    const $session = session();
    if (!$session) return;

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

  return (
    <Box>
      <HStack justifyContent="end" padding={2}>
        <Popover offset={8} placement="bottom-end" withArrow={false}>
          <Popover.Trigger
            aria-label=""
            as={IconButton}
            isLoading={sessionIsLoading()}
          >
            <Show fallback={<FaSolidBars />} when={profile()}>
              <FaSolidUser />
            </Show>
          </Popover.Trigger>

          <Popover.Content p={4} w="max-content">
            <Show
              fallback={
                <Button onClick={(): void => openModal(ModalTypes.LOGIN_MODAL)}>
                  {t('Log In!')}
                </Button>
              }
              when={profile()}
            >
              <Button
                onClick={(): void => {
                  supabase.auth.signOut();
                }}
              >
                Log Out
              </Button>
            </Show>
          </Popover.Content>
        </Popover>
      </HStack>

      <Divider variant="solid" />
    </Box>
  );
}
