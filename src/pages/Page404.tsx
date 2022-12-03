import { Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';
import { Link } from '@solidjs/router';

import { Llama } from '~/assets/icons';
import { Box, Center, Container, Heading, Icon } from '~/shared/ui';
import { useI18n } from '~/globals/i18n';

export function Page404(): JSXElement {
  const { t } = useI18n();
  return (
    <main>
      <HttpStatusCode code={404} />

      <Title>404 {t('not_found')}</Title>

      <Center h={450}>
        <Container centerContent>
          <Box
            background="white"
            borderRadius="50%"
            height={250}
            position="relative"
            width={250}
          >
            <Icon
              as={Llama}
              fill="black"
              height={200}
              left="50%"
              m="-90px"
              position="absolute"
              top="50%"
              width={200}
            />
          </Box>
          <Heading level="1" my={9} size="5xl">
            {t('page_not_found')}
          </Heading>
          <Link href="/">{t('go_main_page')}</Link>
        </Container>
      </Center>
    </main>
  );
}
