import {
  Component,
  Context,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from 'solid-js';

import { ContextValue, ModalsConfig } from './common';
import { createModalsComponent } from './createModalsComponent';

type ModalsReturn<Value> = {
  ModalsContext: Context<Value>;
  ModalsProvider: (props: ParentProps) => JSXElement;
  useModals: () => Value;
  Modals: Component<Record<string, unknown>>;
};

export function createModals<T extends string = string>(
  config: ModalsConfig<T>,
): ModalsReturn<ContextValue<T>> {
  const ModalsContext = createContext<ContextValue<T>>({
    openedModalKey: undefined,
    openModal: () => undefined,
    closeModal: () => undefined,
  });

  function ModalsProvider(props: ParentProps): JSXElement {
    const [openedModalKey, setCurrentModalKey] = createSignal<T | undefined>();

    const openModal = (key: T): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setCurrentModalKey(key);
    };

    const closeModal = (): void => {
      setCurrentModalKey(undefined);
    };

    const modals = { openedModalKey, openModal, closeModal };

    return (
      <ModalsContext.Provider value={modals}>
        {props.children}
      </ModalsContext.Provider>
    );
  }

  function useModals(): ContextValue<T> {
    return useContext(ModalsContext);
  }

  return {
    ModalsContext,
    ModalsProvider,
    useModals,
    Modals: createModalsComponent(ModalsContext, config),
  };
}
