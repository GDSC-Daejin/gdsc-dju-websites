import { collection } from 'firebase/firestore';

export interface UserDataState {
  nickName: string;
  name: string;
  role: string;
  memberImg: string;
  introduce: string;
  position: string;
  email: string;
  uploadDate: string;
  phoneNumber: string;
  warning: number;
}
export interface UserDataWithID extends UserDataState {
  id: string;
}

export type onBoardingMember = {
  email: string;
  nickname: string;
  major: string;
  interest: string;
};
export type AdminDataType = {
  uid: string;
  name: string;
  nickName: string;
  phoneNumber: string;
};
export type recruitmentInfoDataType = {
  frontend: boolean;
  backend: boolean;
  android: boolean;
  design: boolean;
  ml: boolean;
  beginner: boolean;
  home: boolean;
};
export type getRecruitmentInfoDataType = {
  status: string;
  data: {
    frontend: boolean;
    backend: boolean;
    android: boolean;
    design: boolean;
    ml: boolean;
    beginner: boolean;
    home: boolean;
  };
};
export type nickNameDataType = {
  data: { nickname: string }[];
};
export type navigationDataType = { route: string; title: string }[];
