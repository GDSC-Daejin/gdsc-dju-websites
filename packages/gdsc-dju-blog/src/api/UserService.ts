import axios from 'axios';
import { MemberInfo, RowMemberDataType } from '../types/userDataType';

import { Api } from './index';

class UserService extends Api {
  updateMyData = (userInfoData: MemberInfo) => {
    return axios.put(`${this.API}/member-route/api/guest/v1/me`, userInfoData, {
      ...this.Header,
    });
  };
  getMyData = (token: string) => {
    return axios.get<RowMemberDataType>(
      `${this.API}/member-route/api/guest/v1/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
  checkUserNickname = (nickname: string) => {
    const result = axios.post(
      `${this.API}/member-route/api/guest/v1/validation/nickname`,
      nickname,
      {
        ...this.Header,
      },
    );
    return result;
  };
}
export default new UserService();
