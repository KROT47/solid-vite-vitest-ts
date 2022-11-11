import { createSignal } from 'solid-js';
import './Counter.css';

export function Counter(): JSXElement {
  const [count, setCount] = createSignal(0);
  return (
    <button class="increment" onClick={(): void => { setCount(count() + 1) }}>
      Clicks: {count()}
    </button>
  );
}
