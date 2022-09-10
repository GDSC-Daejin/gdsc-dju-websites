import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import UserService from '../UserService';

export const getMyData = async () => {
  const response = await UserService.getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const { data: myData } = useQuery([`userdata`], () => getMyData(), {
    suspense: true,
    enabled: !!token && !!refresh_token,
    retry: 0,
  });

  return { myData: myData && myData };
};
