import TokenService from '@src/api/TokenService';
import { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const refreshErrorHandler = () => {
  Cookies.remove('token');
  console.log('remove');
};

const refresh = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let token = Cookies.get('token');

  //TODO http 환경에서 cookieStore 사용 불가 -> https 설정 필요
  const expireDateValue = await Cookies.get('expires_in');

  const expireDate = new Date(expireDateValue as string);
  console.log(expireDateValue);
  if (token) {
    if (expireDate.getTime() - new Date().getTime() < 0) {
      const response = await TokenService.getRefresh();
      if (response.data.header.code === 200) {
        token = response.data.body.data.token;
      }
      if (response.data.header.code === 403) {
        Cookies.remove('token');
      }
    }
    config.headers = { Authorization: `Bearer ${token}` };
  }
  return config;
};
export { refresh, refreshErrorHandler };
