import { Component, Context, Index, useContext } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { ContextValue, ModalsConfig } from './common';

export function createModalsComponent<Types extends string>(
  ctx: Context<ContextValue<Types>>,
  config: ModalsConfig<Types>,
): Component {
  return function Modals(): JSXElement | null {
    const { openedModalKey, closeModal } = useContext(ctx);

    return (
      <Index each={Object.keys(config)} fallback={null}>
        {(modalType): JSXElement => (
          <Dynamic
            component={config[modalType()].Component}
            isOpened={modalType() === openedModalKey()}
            onClose={closeModal}
          />
        )}
      </Index>
    );
  };
}
