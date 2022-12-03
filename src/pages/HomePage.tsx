import { Title } from 'solid-start';

import { Counter } from '~/entities/counter';

export function HomePage(): JSXElement {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
    </main>
  );
}
