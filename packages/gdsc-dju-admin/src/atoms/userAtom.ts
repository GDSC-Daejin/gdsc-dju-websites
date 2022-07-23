import { atom } from 'jotai';
import { IUserInfoDataType } from '../types/userInfoData';

interface UserAtomType {
  role: string | null;
  username: string | null;
  uid: string | null;
  memberInfo: IUserInfoDataType | null;
}

export const userAtom = atom<UserAtomType>({
  role: null,
  username: null,
  uid: null,
  memberInfo: null,
});
