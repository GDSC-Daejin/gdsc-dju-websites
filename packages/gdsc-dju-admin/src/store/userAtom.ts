import { atom } from 'jotai';
import { getMyData } from '../apis/hooks/useGetMyData';
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
const token = localStorage.getItem('token');
export const userInfoWriteOnlyAtom = atom(null, async (get, set) => {
  const response = await getMyData(token);
  if (response) {
    set(userAtom, {
      role: response.role,
      nickname: response.memberInfo.nickname,
      uid: response.userId,
      memberInfo: response.memberInfo,
    });
  }
});
