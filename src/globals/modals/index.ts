import { AuthModal } from '~/entities/auth';
import { createModals } from '~/shared/modals';

export enum ModalTypes {
  LOGIN_MODAL = 'LOGIN_MODAL',
}

export const { Modals, ModalsProvider, useModals } = createModals<ModalTypes>({
  [ModalTypes.LOGIN_MODAL]: {
    Component: AuthModal,
  },
});
