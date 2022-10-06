import { useQuery } from 'react-query';

import Cookies from 'js-cookie';

import UserService from '../UserService';

export const getMyData = async () => {
  const response = await UserService.getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = Cookies.get('token');

  const { data: myData } = useQuery([`userdata`], () => getMyData(), {
    suspense: true,
    enabled: !!token,
    retry: 0,
  });

  return { myData: myData && myData };
};
