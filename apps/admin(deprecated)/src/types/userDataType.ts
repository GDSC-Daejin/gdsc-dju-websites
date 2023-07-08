import { IUserInfoDataType } from './userInfoData';

export interface IUserDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: IUserInfoDataType;
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface AxiosResponse<T> {
  header: { code: string };
  body: {
    data: T;
  };
}
export interface MemberDataInfoType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  memberInfoId: number;
  birthday: string;
  nickname: string;
  phoneNumber: string;
  positionType: string;
  studentID: string;
  userID: string;
  name: string;
  email: string;
}
