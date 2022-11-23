import { Box, Divider, HStack } from '~/shared/ui';
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
