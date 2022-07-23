import { Api } from './index';

class TokenService extends Api {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI_Dev = 'http://localhost:3000/redirect';
    const OAUTH2_REDIRECT_URI = 'https://gdsc-dju-admin.web.app';
    return `${this.API}/oauth2/authorization/google?redirect_uri=${
      process.env.NODE_ENV === 'development'
        ? OAUTH2_REDIRECT_URI_Dev
        : OAUTH2_REDIRECT_URI
    }`;
  }
}

export default new TokenService();
