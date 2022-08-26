import TokenService from '@src/api/TokenService';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  return response.data.body.data.token;
};

export const useGetMyData = () => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const isEnabled = !!(token && refresh_token);
  const { data: newToken } = useQuery(
    [`${token}-newToken`],
    () => getMyToken(refresh_token!, token!),
    {
      refetchInterval: 20 * 60 * 1000,
      enabled: isEnabled,
      retry: 1,
    },
  );

  return { newToken: newToken ?? newToken };
};
