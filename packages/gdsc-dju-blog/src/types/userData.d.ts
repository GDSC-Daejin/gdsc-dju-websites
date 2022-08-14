export interface IUserDataType {
  id: number;
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

export interface IRowUserDataType {
  header: string;
  body: {
    data: ILoginUserData;
  };
}

export interface ILoginUserData {
  id: number;
  userId: string;
  username: string;
  email: string;
  emailVerifiedYn: string;
  profileImageUrl: string;
  role: 'GUEST' | 'MEMBER' | 'CORE' | 'LEAD';
  providerType: string;
  memberInfo: IUserInfoDataType;
  modifiedAt: string;
  uploadDate: string;
}

export interface IUserInfoDataType {
  generation: number;
  gitEmail: string;
  hashTag: string;
  introduce: string;
  major: string;
  userInfoId: number;
  birthday: string;
  nickname: string;
  phoneNumber: string;
  positionType: string;
  studentID: string;
  userID: string;
  name: string;
  email: string;
  githubUrl: string;
  blogUrl: string;
  etcUrl: string;
}

export interface IUserUrlsType {
  id: number;
  webUrl: string;
}

export interface IUserEditDataType {
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
  githubUrl: string;
  blogUrl: string;
  resumeUrl: string;
}
