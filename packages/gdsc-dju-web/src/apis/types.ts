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

export type RecruitmentInfo = {
  frontend: boolean;
  backend: boolean;
  android: boolean;
  design: boolean;
  ml: boolean;
  beginner: boolean;
  home: boolean;
};
export type RowRecruitmentInfo = {
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
