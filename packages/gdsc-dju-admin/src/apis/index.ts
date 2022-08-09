import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  recruitmentInfoDataType,
} from '../types/recruitmentInfo';

export class Api {
  protected API: string;
  protected ACCOUNT_API: string;
  protected TOKEN: string;
  protected REFRESH_TOKEN: string;
  constructor() {
    this.API = 'https://api.gdsc-dju.com';
    this.ACCOUNT_API = 'https://accounts.gdsc-dju.com';
    this.TOKEN = localStorage.getItem('token') ?? '';
    this.REFRESH_TOKEN = localStorage.getItem('refresh_token') ?? '';
  }
  getRecruitStatus = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/api/support/limit`,
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/member-route/api/admin/v1/support/limit/update`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${this.TOKEN}`,
        },
      },
    );
  };
}
export default new Api();
