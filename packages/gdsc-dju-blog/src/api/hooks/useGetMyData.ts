import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';
import UserService from '../UserService';
import { getMyToken, useGetNewToken } from '@src/api/hooks/useGetNewToken';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const [cookies, setCookies] = useCookies(['token', 'refresh_token']);
  const { newToken, isSuccess } = useGetNewToken();
  const token = newToken ?? cookies.token;
  const refresh_token = cookies.refresh_token;
  newToken && setCookies('token', newToken);

  const isEnabled = !!(token && refresh_token && isSuccess);

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
          setCookies('token', newToken);
        }
      },
    },
  );

  return { myData: myData && myData };
};
