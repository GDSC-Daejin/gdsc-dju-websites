import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import UserService from '../UserService';
import { getMyToken } from './useGetNewToken';

export const getUserData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
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
        const newToken = await getMyToken(refresh_token, token);
        await Cookies.set('token', newToken);
      },
    },
  );

  return { userData: userData ?? userData };
};
