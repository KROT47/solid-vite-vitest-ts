import { Button } from '@hope-ui/core';
import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);

export function Counter(): JSXElement {
  return (
    <Button
      variant="solid"
      size="lg"
      color="red"
      _dark={{ color: 'red' }}
      onClick={(): void => {
        setCount(count() + 1);
      }}
    >
      Clicks: {count()}
    </Button>
  );
}
