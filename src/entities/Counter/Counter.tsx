import { Box, Button, HStack, VStack } from '@hope-ui/core';
import { useUnit } from 'effector-solid';

import { $counterState, counterApi } from './Counter.model';

export function Counter(): JSXElement {
  const state = useUnit($counterState);

  return (
    <>
      <VStack spacing={4}>
        <HStack justify="center" spacing={4}>
          <Button
            _dark={{ color: 'red' }}
            color="red"
            size="lg"
            variant="solid"
            onClick={(): void => counterApi.inc()}
          >
            Increment
          </Button>

          <Button size="lg" onClick={(): void => counterApi.dec()}>
            Decrement
          </Button>
        </HStack>

        <Box data-testId="counter-state" textAlign="center">
          State: {state}
        </Box>
      </VStack>
    </>
  );
}
