import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import { createQueryKey } from '@utils/createQueryKey';

import UserService from '../UserService';

export const getMyData = async () => {
  const response = await UserService.getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = Cookies.get('token');

  const key = createQueryKey('me', {
    token: token,
  });

  const { data: myData } = useQuery([key], () => getMyData(), {
    suspense: true,
    enabled: Boolean(token),

    retry: 0,
  });

  return { myData: myData && myData };
};
