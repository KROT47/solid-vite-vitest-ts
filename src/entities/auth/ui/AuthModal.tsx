import { AuthForm } from './AuthForm';
import { HStack, Modal } from '~/shared/ui';
import { useI18n } from '~/globals/i18n';

export function AuthModal(props: {
  isOpened: boolean;
  onClose: () => void;
}): JSXElement {
  const { t } = useI18n();
  const handleClose = (): void => props.onClose();

  return (
    <Modal isOpen={props.isOpened} onClose={handleClose}>
      <Modal.Overlay />
      <Modal.Content p={4}>
        <HStack alignItems="flex-start" justifyContent="space-between" mb={4}>
          <Modal.Heading fontWeight="semibold">
            {t('log_in_noun')}
          </Modal.Heading>

          <Modal.CloseButton />
        </HStack>

        <AuthForm />
      </Modal.Content>
    </Modal>
  );
}
