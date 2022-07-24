import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  recruitmentInfoDataType,
} from 'gdsc-dju-web/src/apis/types';

export class Api {
  protected API: string;
  protected ACCOUNT_API: string;
  protected TOKEN: string;
  protected REFRESH_TOKEN: string;
  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.API = 'https://gdsc-dju-dev.kro.kr';
    } else {
      this.API = 'https://gdsc-dju.com';
    }
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
      `${this.API}/api/admin/v1/support/limit/update`,
      payload,
    );
  };
}
export default new Api();
