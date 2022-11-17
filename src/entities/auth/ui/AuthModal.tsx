import { HStack, Modal } from '@hope-ui/core';

import { AuthForm } from './AuthForm';

export function AuthModal(props: {
  isOpened: boolean;
  onClose: () => void;
}): JSXElement {
  const handleClose = (): void => props.onClose();
  return (
    <Modal isOpen={props.isOpened} onClose={handleClose}>
      <Modal.Overlay />
      <Modal.Content p={4}>
        <HStack alignItems="flex-start" justifyContent="space-between" mb={4}>
          <Modal.Heading fontWeight="semibold">Sign In</Modal.Heading>

          <Modal.CloseButton />
        </HStack>

        <AuthForm />
      </Modal.Content>
    </Modal>
  );
}
