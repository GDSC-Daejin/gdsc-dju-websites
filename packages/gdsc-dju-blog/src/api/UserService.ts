import Auth from './AuthService';
import { Api } from './index';
import { MemberInfo, RowUserData, RowUserGuest } from '@type/userDataType';

class UserService extends Api {
  updateMyData = (userInfoData: MemberInfo) => {
    return Auth.put(`${this.API}/member-route/api/guest/v1/me`, userInfoData);
  };
  getMyData = () => {
    return Auth.get<RowUserData>(`${this.API}/member-route/api/guest/v1/me`);
  };
  getGuestData = (nickname: string) => {
    return Auth.get<RowUserGuest>(
      `${this.API}/member-route/api/v1/memberInfo/${nickname}`,
    );
  };
  checkUserNickname = (nickname: string) => {
    return Auth.post(
      `${this.API}/member-route/api/guest/v1/validation/nickname`,
      nickname,
    );
  };
}
export default new UserService();
