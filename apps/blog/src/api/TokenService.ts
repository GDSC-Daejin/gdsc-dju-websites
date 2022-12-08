import { AuthInstance } from '@src/api/Instance';
import { RefreshToken } from '@type/token';

class TokenService {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI = `${location.origin}/redirect`;
    return `https://accounts.gdsc-dju.com/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  }
  getRefresh = () => {
    return AuthInstance.get<RefreshToken>(`/refresh`);
  };
}
export default new TokenService();
