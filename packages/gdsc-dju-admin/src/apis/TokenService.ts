import axios from 'axios';
import { Api } from './index';

class TokenService extends Api {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI_Dev = 'http://localhost:3000/redirect';
    const OAUTH2_REDIRECT_URI = 'https://gdsc-dju-admin.web.app/redirect';
    return `${this.ACCOUNT_API}/oauth2/authorization/google?redirect_uri=${
      process.env.NODE_ENV === 'development'
        ? OAUTH2_REDIRECT_URI_Dev
        : OAUTH2_REDIRECT_URI
    }`;
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
