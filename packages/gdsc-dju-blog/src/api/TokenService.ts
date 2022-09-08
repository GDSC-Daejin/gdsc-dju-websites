import { Instance } from '@src/api/AuthService';
import { RefreshToken } from '@type/token';

class TokenService {
  getRedirectURL() {
    const OAUTH2_REDIRECT_URI = `${location.origin}/redirect`;
    return `https://accounts.gdsc-dju.com/oauth2/authorization/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
  }
  getRefresh = (refreshToken: string, token: string) => {
    return Instance.get<RefreshToken>(`/refresh`, {
      headers: {
        Authorization: `Bearer ${token}`,
        RefreshToken: `Bearer ${refreshToken}`,
      },
    });
  };
}
export default new TokenService();
