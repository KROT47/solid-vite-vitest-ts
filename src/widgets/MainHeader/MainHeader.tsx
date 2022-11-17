import { Box, Divider, HStack } from '@hope-ui/core';

import { AuthModalButton } from '~/features/auth';

export function MainHeader(): JSXElement {
  return (
    <Box>
      <HStack justifyContent="end" padding={2}>
        <AuthModalButton />
      </HStack>
      <Divider variant="solid" />
    </Box>
  );
}
