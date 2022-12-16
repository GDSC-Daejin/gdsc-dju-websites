import { useQuery } from 'react-query';

import UserService from '@src/api/UserService';
import { createQueryKey } from '@utils/createQueryKey';

export const getGuestData = async (token: string) => {
  const response = await UserService.getGuestData(token);

  return response.data.body.data;
};

export const useGetGuestData = (nickname: string | undefined) => {
  const key = createQueryKey('memberInfo', {
    nickname: nickname,
  });
  const { data: guestData } = useQuery([key], () => getGuestData(nickname!), {
    suspense: true,
    enabled: Boolean(nickname),
    retry: 0,
  });
  return { guestData: guestData && guestData };
};
