import TokenService from '../TokenService';
import { useQuery } from 'react-query';

export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  return response.data.body.data.token;
};
export const useGetMyToken = () => {
  const token = localStorage.getItem('token') ?? '';
  const refresh_token = localStorage.getItem('refresh_token') ?? '';
  const isLoggedIn = token && refresh_token;
  const { data: newToken } = useQuery(
    [refresh_token, refresh_token],
    () => getMyToken(refresh_token, token),
    {
      refetchInterval: 30 * 60 * 1000,
      retry: 2,
      enabled: !!isLoggedIn,
      refetchOnWindowFocus: true,
      onError: () => {
        isLoggedIn && TokenService.getRefresh(refresh_token, token);
      },
    },
  );
  newToken && localStorage.setItem('token', newToken);
};
