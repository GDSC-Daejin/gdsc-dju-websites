import axios from 'axios';
import { MemberInfo, RowUserData, RowUserGuest } from '@type/userDataType';

import { Api } from './index';

class UserService extends Api {
  updateMyData = (userInfoData: MemberInfo) => {
    return axios.put(`${this.API}/member-route/api/guest/v1/me`, userInfoData, {
      ...this.Header,
    });
  };
  getMyData = (token: string) => {
    return axios.get<RowUserData>(`${this.API}/member-route/api/guest/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  getGuestData = (nickname: string) => {
    return axios.get<RowUserGuest>(
      `${this.API}/member-route/api/v1/memberInfo/${nickname}`,
    );
  };
}
export default new UserService();
