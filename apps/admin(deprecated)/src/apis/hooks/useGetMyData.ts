import { useMemo } from 'react';

import { useAtom } from 'jotai';

import { userAtom } from '@src/store/userAtom';
import { IUserDataType } from '@type/userDataType';

export const useGetMyData = () => {
  const [user] = useAtom(userAtom);

  const userData = useMemo<IUserDataType | undefined>(() => {
    if (!user.uid || !user.role || !user.memberInfo) {
      return undefined;
    }

    return {
      email: user.email ?? '',
      emailVerifiedYn: 'Y',
      memberInfo: user.memberInfo,
      modifiedAt: '',
      password: '',
      profileImageUrl: '',
      providerType: 'GOOGLE',
      role: user.role,
      uploadDate: '',
      userId: user.uid,
      username: user.username ?? user.nickname ?? '',
    };
  }, [user]);

  return { userData };
};
