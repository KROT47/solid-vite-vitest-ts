import { Box } from '@hope-ui/core';
import { Component, createSignal, ParentProps } from 'solid-js';

type ModalWrapperProps = {
  component: Component<{ isOpened: boolean; onClose: () => void }>;
};

export function ModalWrapper(
  props: ParentProps<ModalWrapperProps>,
): JSXElement {
  const [isOpened, setIsOpened] = createSignal(false);

  return (
    <>
      <Box onClick={(): true => setIsOpened(true)}>{props.children}</Box>

      <props.component
        isOpened={isOpened()}
        onClose={(): false => setIsOpened(false)}
      />
    </>
  );
}
