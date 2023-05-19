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

export type OnboardMember = {
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
export type RecruitmentInfoDataType = {
  frontend: boolean;
  backend: boolean;
  android: boolean;
  design: boolean;
  ml: boolean;
  beginner: boolean;
  home: boolean;
};

export type NicknameData = {
  data: Array<{ nickname: string }>;
};
export type NavigationType = Array<{ route: string; title: string }>;
