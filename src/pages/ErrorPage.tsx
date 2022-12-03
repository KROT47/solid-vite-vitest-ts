import { Container, Button, Center, Heading } from '~/shared/ui';

export function ErrorPage(props: { error?: unknown }): JSXElement {
  return (
    <Center h="100%">
      <Container centerContent>
        <Heading level="1">Something went terribly wrong</Heading>
        <Button onClick={(): void => location.reload()}>Refresh</Button>
      </Container>
    </Center>
  );
}
