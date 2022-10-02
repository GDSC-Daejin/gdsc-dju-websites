import { getUserData } from '@src/apis/hooks/useGetMyData';
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

export const userInfoWriteOnlyAtom = atom(null, async (get, set) => {
  await getUserData().then((userData) => {
    set(userAtom, {
      role: userData.role,
      nickname: userData.memberInfo.nickname,
      uid: userData.userId,
      memberInfo: userData.memberInfo,
    });
  });
});
