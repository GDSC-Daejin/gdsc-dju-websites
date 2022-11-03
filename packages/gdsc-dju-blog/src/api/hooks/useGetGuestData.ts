import { useQuery } from 'react-query';

import UserService from '@src/api/UserService';

export const getGuestData = async (token: string) => {
  const response = await UserService.getGuestData(token);
  //TODO : response.data.body.data 변경 요청
  //@ts-ignore
  return response.data.body.memberInfo;
};

export const useGetGuestData = (nickname: string | undefined) => {
  const { data: guestData } = useQuery(
    [`${nickname}-data`],
    () => getGuestData(nickname!),
    { suspense: true, enabled: Boolean(nickname), retry: 0 },
  );
  return { guestData: guestData && guestData };
};
