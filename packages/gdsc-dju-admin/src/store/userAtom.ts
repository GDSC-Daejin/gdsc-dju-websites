import { atom } from 'jotai';
import { getMyData } from '../apis/hooks/useGetMyData';
import UserService from '../apis/UserService';
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

export const userInfoWriteOnlyAtom = atom(
  null,
  async (get, set, token: string) => {
    await getMyData(token).then((userData) => {
      set(userAtom, {
        role: userData.role,
        nickname: userData.memberInfo.nickname,
        uid: userData.userId,
        memberInfo: userData.memberInfo,
      });
    });
  },
);
