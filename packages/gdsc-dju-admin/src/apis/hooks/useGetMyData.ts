import { useQuery } from 'react-query';
import UserService from '../UserService';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = localStorage.getItem('token');
  const refresh_token = localStorage.getItem('refresh_token');
  const isLoggedIn = token && refresh_token;
  const { data: userData } = useQuery(
    [token, token],
    () => getMyData(token as string),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      enabled: !!isLoggedIn,
      onError: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
      },
    },
  );
  return { userData: userData ?? userData };
};
