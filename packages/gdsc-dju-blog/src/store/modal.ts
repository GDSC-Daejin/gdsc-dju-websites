import { atom } from 'recoil';
import { lightTheme } from '../styles/theme';

const MODAL = 'modal';

export const ModalState: IModalState = {
  isOpen: false,
  type: 'login',
  onClick: null,
};

export type ModalType =
  | 'login'
  | 'backBlock'
  | 'uploadPost'
  | 'deleteCheck'
  | 'update';

export type IModalState = {
  onClick: null | (() => void);
  isOpen: boolean;
  type: ModalType;
};
export type IModalType = {
  [key in ModalType]: {
    description: string;
    leftButton: string;
    rightButton: string;
    rightColor: keyof typeof lightTheme.colors;
  };
};

export const modalState = atom<IModalState>({
  key: MODAL,
  default: ModalState,
});
