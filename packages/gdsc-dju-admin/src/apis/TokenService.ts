import axios from 'axios';
import { Api } from './index';

class TokenService extends Api {
  getRedirectURL() {
    sessionStorage.setItem('hostname', location.origin);
    const OAUTH2_REDIRECT_URI = `${sessionStorage.getItem(
      'hostname',
    )}/redirect`;
    return `${this.ACCOUNT_API}/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  }
  getRefresh = (refreshToken: string, token: string) => {
    return axios.get(`${this.ACCOUNT_API}/refresh`, {
      headers: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    });
  };
}

export default new TokenService();
