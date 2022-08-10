import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  recruitmentInfoDataType,
} from '../types/recruitmentInfo';

export class Api {
  protected API: string;
  protected ACCOUNT_API: string;

  constructor() {
    this.API = 'https://api.gdsc-dju.com';
    this.ACCOUNT_API = 'https://accounts.gdsc-dju.com';
  }
  getRecruitStatus = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/member-route/api/v1/support/limit`,
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType, token: string) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/member-route/api/admin/v1/support/limit/update`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };
}
export default new Api();
