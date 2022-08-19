import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import TokenService from '../TokenService';
import UserService from '../UserService';

export const getUserData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};
export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  return response.data;
};

export const setMyToken = async (refreshToken: string, token: string) => {
  getMyToken(refreshToken, token);
};

export const useGetMyData = () => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const isEnabled = !!(token && refresh_token);
  const { data: userData } = useQuery(
    [`${token}-userdata`],
    () => getUserData(token!),
    {
      refetchInterval: 20 * 60 * 1000,
      enabled: isEnabled,
      onError: async () => {
        if (!isEnabled) {
          return;
        }
        const newToken = await getMyToken(refresh_token, token);
        if (newToken) {
          Cookies.set('token', newToken);
        }
      },
    },
  );

  return { userData: userData ?? userData };
};
