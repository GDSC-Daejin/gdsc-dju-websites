import { atom } from 'jotai';
import { IUserInfoDataType } from '../types/userInfoData';

interface UserAtomType {
  role: string | null;
  nickname: string | null;
  uid: string | null;
  memberInfo: IUserInfoDataType | null;
}

export const userAtom = atom<UserAtomType>({
  role: null,
  nickname: null,
  uid: null,
  memberInfo: null,
});
