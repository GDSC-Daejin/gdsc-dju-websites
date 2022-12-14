import { atom } from 'jotai';

export type ModalKey =
  | 'EMAIL'
  | 'SIGNUP'
  | 'USER_MENU'
  | 'APPLICANT'
  | 'MEMBER';

export interface ModalAtom {
  isOpen: ModalKey | null;
  selectedID: string;
}

export const modalAtom = atom<ModalAtom>({
  isOpen: null,
  selectedID: '',
});
