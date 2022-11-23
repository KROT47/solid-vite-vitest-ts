import { FaSolidUser } from 'solid-icons/fa';

import { Box, Divider, HStack, IconButton, ModalWrapper } from '~/shared/ui';
import { AuthModal } from '~/entities/auth';

export function MainHeader(): JSXElement {
  return (
    <Box>
      <HStack justifyContent="end" padding={2}>
        <ModalWrapper component={AuthModal}>
          <IconButton aria-label="Search">
            <FaSolidUser />
          </IconButton>
        </ModalWrapper>
      </HStack>

      <Divider variant="solid" />
    </Box>
  );
}
