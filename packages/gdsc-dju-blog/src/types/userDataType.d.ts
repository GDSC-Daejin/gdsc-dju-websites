export interface IUserDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: MemberInfo;
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface RowMemberDataType {
  header: { code: string };
  body: {
    data: IUserDataType;
  };
}

export interface ValidationMemberInfo {
  generation: number;
  introduce: string;
  nickname: string;
  phoneNumber: string;
  major: string;
  gitEmail: string;
  studentID: string;
  hashTag: string;
  githubUrl: string;
  blogUrl: string;
  etcUrl: string;
  birthday: string;
  positionType: string;
}

export interface MemberInfo extends ValidationMemberInfo {
  memberInfoId: number;
  id: string;
}
