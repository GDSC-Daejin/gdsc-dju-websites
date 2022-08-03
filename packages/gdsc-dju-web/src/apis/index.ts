// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import { memberWarning } from '../types/admin';
import {
  UserDataState,
  getRecruitmentInfoDataType,
  nickNameDataType,
  onBoardingMember,
  recruitmentInfoDataType,
} from './types';

export class GDSCApi {
  private API: string;
  private FIREBASE_API: string;
  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this.API = 'https://gdsc-dju.kro.kr';
    } else {
      this.API = 'https://gdsc-dju.com';
    }
    this.FIREBASE_API =
      'https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)';
  }
  getMemberNickname = () => {
    return axios.get<nickNameDataType>(
      `${this.API}/api/member/onBoarding/nickname`,
    );
  };
  postOnboardingMembers = (payload: onBoardingMember) => {
    return axios.post<onBoardingMember>(
      `${this.API}/api/member/onBoarding/join`,
      payload,
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
  postMemberWarning = (payload: memberWarning) => {
    return axios.post<UserDataState>(
      `${this.API}/api/admin/v1/warning`,
      payload,
    );
  };
  putMemberRole = (payload: memberWarning) => {
    return axios.post<UserDataState>(
      `${this.API}/api/admin/v1/update/role`,
      payload,
    );
  };
  getAdminUser = (id: string | null) => {
    return axios.get(`${this.FIREBASE_API}/documents/adminUsers/${id}`);
  };
  getApplicants = () => {
    return axios.get(`${this.FIREBASE_API}/documents/applicants`);
  };
  getChapterEvents = () => {
    return axios.get(`https://gdsc.community.dev/api/event/?chapter=1833`);
  };
}
export default new GDSCApi();
