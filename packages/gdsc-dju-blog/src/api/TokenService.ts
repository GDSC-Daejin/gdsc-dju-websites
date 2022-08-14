import axios from 'axios';
import { Api } from './index';

class TokenService extends Api {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI = `${location.origin}/redirect`;
    return `${this.ACCOUNT_API}/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  }
  getRefresh = (refreshToken: string, token: string) => {
    return axios.get(`${this.API}/refresh`, {
      headers: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    });
  };
  setToken = (token: string) => {
    this.Header.headers.Authorization = token;
  };
  getToken = (): string => {
    return this.Header.headers.Authorization;
  };
  getAPI = (): string => {
    return this.API;
  };
}
export default new TokenService();
