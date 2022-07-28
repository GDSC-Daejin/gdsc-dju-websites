import { useQuery } from 'react-query';
import TokenService from '../TokenService';
import UserService from '../UserService';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = localStorage.getItem('token') ?? '';
  const refresh_token = localStorage.getItem('refresh_token') ?? '';
  const isLoggedIn = token && refresh_token;
  const { data: userData } = useQuery([token, token], () => getMyData(token), {
    refetchInterval: 30 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
    enabled: !!token,
    onError: () => {
      isLoggedIn && TokenService.getRefresh(refresh_token, token);
    },
  });
  return { userData: userData ?? userData };
};
