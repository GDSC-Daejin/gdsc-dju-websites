import TokenService from '@src/api/TokenService';
import { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const refreshErrorHandler = () => {
  Cookies.remove('token');
};

const refresh = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  const refresh_token = Cookies.get('refresh_token');
  let token = Cookies.get('token');
  const expires = new Date(new Date().getTime() + 30 * 60 * 1000);
  if (token && refresh_token) {
    const response = await TokenService.getRefresh(refresh_token, token);
    if (response.data.header.code === 200) {
      token = response.data.body.data.token;
      Cookies.set('token', token, {
        path: '/',
        expires: expires,
      });
    } else if (response.data.header.code === 403) {
      Cookies.remove('token');
      Cookies.remove('refresh_token');
    }
  }
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
};
export { refresh, refreshErrorHandler };
