import { atom } from 'jotai';

import { IUserInfoDataType } from '@type/userInfoData';

export interface UserAtomType {
  role: string | null;
  nickname: string | null;
  uid: string | null;
  memberInfo: IUserInfoDataType | null;
  email: string | null;
  username: string | null;
}

export const initialUserState: UserAtomType = {
  role: null,
  nickname: null,
  uid: null,
  memberInfo: null,
  email: null,
  username: null,
};

export const userAtom = atom<UserAtomType>(initialUserState);

export const setUserAtom = atom(null, (_get, set, user: UserAtomType) => {
  set(userAtom, user);
});

export const resetUserAtom = atom(null, (_get, set) => {
  set(userAtom, initialUserState);
});
