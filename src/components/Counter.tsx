import { createSignal } from 'solid-js';

import styles from './Counter.module.scss';

export function Counter(): JSXElement {
  const [count, setCount] = createSignal(0);
  return (
    <button class={styles.increment} onClick={(): void => { setCount(count() + 1) }}>
      Clicks: {count()}
    </button>
  );
}
