import { useQuery } from 'react-query';

import UserService from '@src/api/UserService';

export const getGuestData = async (token: string) => {
  const response = await UserService.getGuestData(token);

  return response.data.body.data;
};

export const useGetGuestData = (nickname: string | undefined) => {
  const { data: guestData } = useQuery(
    [`${nickname}-data`],
    () => getGuestData(nickname!),
    { suspense: true, enabled: Boolean(nickname), retry: 0 },
  );
  return { guestData: guestData && guestData };
};
