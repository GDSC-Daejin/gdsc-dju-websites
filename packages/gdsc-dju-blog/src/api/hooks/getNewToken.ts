import TokenService from '@src/api/TokenService';
import { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const refreshErrorHandler = () => {
  Cookies.remove('token');
};

const refresh = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
  let token = Cookies.get('token');

  //TODO http 환경에서 cookieStore 사용 불가 -> https 설정 필요

  // cookieStore를 ts에서 접근하지 못함 -> ts ignore 설정
  // @ts-ignore
  // eslint-disable-next-line no-undef
  const { expires } = await cookieStore.get('token');

  const expireDate = new Date(new Date().getTime() + 30 * 60 * 1000);
  if (expires - new Date().getTime() < 0) {
    const response = await TokenService.getRefresh();
    if (response.data.header.code === 200) {
      token = response.data.body.data.token;
      Cookies.set('token', token, {
        path: '/',
        expires: expireDate,
      });
    } else if (response.data.header.code === 403) {
      Cookies.remove('token');
    }
  }
  config.headers = { Authorization: `Bearer ${token}` };
  return config;
};
export { refresh, refreshErrorHandler };
