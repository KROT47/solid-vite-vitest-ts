import { IconButton } from '@hope-ui/core';
import { createSignal } from 'solid-js';
import { FaSolidUser } from 'solid-icons/fa';

import { AuthModal } from '~/entities/auth/ui/AuthModal';

export function AuthModalButton(): JSXElement {
  const [isOpened, setIsOpened] = createSignal(false);

  return (
    <>
      <IconButton aria-label="Search" onClick={(): true => setIsOpened(true)}>
        <FaSolidUser />
      </IconButton>

      <AuthModal
        isOpened={isOpened()}
        onClose={(): false => setIsOpened(false)}
      />
    </>
  );
}
