import { Accessor, Component } from 'solid-js';

export type ContextValue<T extends string> = {
  readonly openedModalKey: Accessor<T | undefined>;
  openModal: (key: T) => void;
  closeModal: () => void;
};

export type ModalsConfig<T extends string> = Record<
  T,
  {
    Component: Component<{ isOpened: boolean; onClose: () => void }>;
  }
>;
