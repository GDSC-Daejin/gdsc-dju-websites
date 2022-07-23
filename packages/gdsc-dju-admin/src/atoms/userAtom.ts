import { atom } from 'jotai';

interface UserAtomType {
  uid: string | null;
  name: string | null;
  nickname: string | null;
  phoneNumber: string | null;
}

export const userAtom = atom<UserAtomType>({
  uid: '',
  name: '',
  nickname: '',
  phoneNumber: '',
});
