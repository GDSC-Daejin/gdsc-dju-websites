import axios from 'axios';
import { recruitmentInfoDataType } from '../types/recruitmentInfo';
import { RowMemberDataType } from '../types/userDataType';

import { Api } from './index';

class UserService extends Api {
  getMyData = (token: string) => {
    return axios.get<RowMemberDataType>(
      `${this.ACCOUNT_API}/member-route/api/guest/v1/me`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/member-route/api/admin/v1/support/limit/update`,
      payload,
    );
  };
}
export default new UserService();
