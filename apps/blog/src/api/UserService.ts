import { AuthInstance, Instance } from '@src/api/Instance';
import { ResponseData } from '@type/type';
import { MemberInfo, UserData, UserGuest } from '@type/userDataType';

class UserService {
  updateMyData = (userInfoData: MemberInfo) => {
    return AuthInstance.put(`/member-route/api/guest/v1/me`, userInfoData);
  };
  getMyData = () => {
    return AuthInstance.get<ResponseData<UserData>>(
      `/member-route/api/guest/v1/me`,
    );
  };
  getGuestData = (nickname: string) => {
    return Instance.get<ResponseData<UserGuest>>(
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
