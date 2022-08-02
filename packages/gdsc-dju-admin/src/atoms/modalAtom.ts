import { atom } from 'jotai';

export const modalAtom = atom({
  ADMIN_EMAIL: false,
  ADMIN_SIGNUP: false,
  USER_MENU: false,
  ADMIN_APPLICANT: false,
  selectedID: '',
});
