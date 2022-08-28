import TokenService from '@src/api/TokenService';
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);

  if (response.data.header.code == 500) return;
  return response.data.body.data.token;
};

export const useGetNewToken = () => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const isEnabled = !!(token && refresh_token);
  const { data: newToken, isSuccess } = useQuery(
    [`${token}-newToken`],
    () => getMyToken(refresh_token!, token!),
    {
      refetchInterval: 20 * 60 * 1000,
      enabled: isEnabled,
      retry: 1,
    },
  );

  return { newToken: newToken && newToken, isSuccess };
};
