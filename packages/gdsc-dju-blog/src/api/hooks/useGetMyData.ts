import Cookies from 'js-cookie';
import { useQuery } from 'react-query';
import UserService from '../UserService';

export const getUserData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
<<<<<<< HEAD
};
export const getMyToken = async (refreshToken: string, token: string) => {
  const response = await TokenService.getRefresh(refreshToken, token);
  if (response.data.header.code !== 200 || response.status !== 200) {
    Cookies.remove('token');
    Cookies.remove('refresh_token');
  }
  return response.data.body.data.token;
=======
>>>>>>> 5ec2cca35b4258a663fac6f7f27690ad215f7067
};

export const useGetMyData = () => {
  const token = Cookies.get('token');
  const refresh_token = Cookies.get('refresh_token');
  const isEnabled = !!(token && refresh_token);
  const { data: userData } = useQuery(
    [`${token}-userdata`],
    () => getUserData(token!),
    {
<<<<<<< HEAD
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
=======
      enabled: isEnabled,
      retry: 1,
    },
  );

  return { userData: userData && userData };
>>>>>>> 5ec2cca35b4258a663fac6f7f27690ad215f7067
};
