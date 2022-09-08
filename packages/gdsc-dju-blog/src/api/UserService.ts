import { AuthInstance, Instance } from '@src/api/AuthService';
import { MemberInfo, RowUserData, RowUserGuest } from '@type/userDataType';

class UserService {
  updateMyData = (userInfoData: MemberInfo) => {
    return AuthInstance.put(`/member-route/api/guest/v1/me`, userInfoData);
  };
  getMyData = () => {
    return AuthInstance.get<RowUserData>(`/member-route/api/guest/v1/me`);
  };
  getGuestData = (nickname: string) => {
    return Instance.get<RowUserGuest>(
      `/member-route/api/v1/memberInfo/${nickname}`,
    );
  };
  checkUserNickname = (nickname: string) => {
    return AuthInstance.post(
      `/member-route/api/guest/v1/validation/nickname`,
      nickname,
    );
  };
}
export default new UserService();
