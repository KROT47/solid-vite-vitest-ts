import { FaSolidBars, FaSolidUser } from 'solid-icons/fa';
import { Show } from 'solid-js';

import { Box, Button, Divider, HStack, IconButton, Popover } from '~/shared/ui';
import { supabase } from '~/shared/supabase';
import { ModalTypes, useModals } from '~/globals/modals';
import { useI18n } from '~/globals/i18n';
import { useUserProfile } from '~/shared/hooks';

export function MainHeader(): JSXElement {
  const { t } = useI18n();
  const userProfile = useUserProfile();
  const { openModal } = useModals();

  return (
    <Box>
      <HStack justifyContent="end" padding={2}>
        <Popover offset={8} placement="bottom-end" withArrow={false}>
          <Popover.Trigger
            aria-label=""
            as={IconButton}
            isLoading={userProfile() === undefined}
          >
            <Show fallback={<FaSolidBars />} when={userProfile()}>
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
              when={userProfile()}
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
