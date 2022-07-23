import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  recruitmentInfoDataType,
} from 'gdsc-dju-web/src/apis/types';

export class Api {
  protected API: string;
  protected FIREBASE_API: string;
  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.API = 'https://gdsc-dju-dev.kro.kr';
    } else {
      this.API = 'https://gdsc-dju.com';
    }
    this.FIREBASE_API =
      'https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)';
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
