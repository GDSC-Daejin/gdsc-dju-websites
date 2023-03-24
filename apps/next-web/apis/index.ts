// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';

import { getRecruitmentInfoDataType, recruitmentInfoDataType } from './types';

export class GDSCApi {
  protected API: string;
  constructor() {
    this.API = 'https://api.gdsc-dju.com';
  }

  getRecruitStatus = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/member-route/api/v1/support/limit`,
    );
  };
  putRecruitStatus = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/member-route/api/admin/v1/support/limit/update`,
      payload,
    );
  };
  getMemberList = () => {
    return axios.get(`${this.API}/member-route/api/v1/members`);
  };
  getChapterEvents = () => {
    return axios.get(`https://gdsc.community.dev/api/event/?chapter=1833`);
  };
}
export default new GDSCApi();
