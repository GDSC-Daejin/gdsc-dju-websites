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

export const setMyToken = async (token: string) => {
  Cookies.set('token', token);
};
const refreshHandler = async (refresh_token: string, token: string) => {
  const response = await getMyToken(refresh_token, token);
  if (response.header.code !== 200) {
    Cookies.remove('token');
    Cookies.remove('refresh_token');
  } else {
    await setMyToken(response.body.data.token);
  }
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
      retry: 1,
      onError: async () => {
        if (!isEnabled) return;
        await refreshHandler(refresh_token, token);
      },
    },
  );

  return { userData: userData ?? userData };
};
