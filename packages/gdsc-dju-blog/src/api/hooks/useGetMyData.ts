import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import UserService from '../UserService';
import { getMyToken, useGetNewToken } from '@src/api/hooks/useGetNewToken';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const { newToken, isSuccess } = useGetNewToken();
  const token = isSuccess ? newToken : newToken ?? Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const isEnabled = !!(token && refresh_token);

  const { data: myData } = useQuery(
    [`${token}-userdata`],
    () => getMyData(token!),
    {
      suspense: true,
      enabled: isEnabled,
      retry: 1,
      onError: async () => {
        if (token && refresh_token) {
          const newToken = await getMyToken(refresh_token, token);
          if (!newToken) return;
          Cookies.set('token', newToken);
        }
      },
    },
  );

  return { myData: myData && myData };
};
