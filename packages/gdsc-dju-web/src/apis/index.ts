// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  nickNameDataType,
  recruitmentInfoDataType,
} from './types';

export class GDSCApi {
  protected API: string;
  constructor() {
    this.API = 'https://api.gdsc-dju.com';
  }
  getMemberNickname = () => {
    return axios.get<nickNameDataType>(
      `${this.API}/api/member/onBoarding/nickname`,
    );
  };

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

  getChapterEvents = () => {
    return axios.get(`https://gdsc.community.dev/api/event/?chapter=1833`);
  };
}
export default new GDSCApi();
