export interface UserData {
  email: string;
  emailVerifiedYn: string;
  memberInfo: MemberInfo;
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: 'GUEST' | 'MEMBER' | 'CORE' | 'LEAD';
  uploadDate: string;
  userId: string;
  username: string;
}

export interface UserGuest {
  hashTag: string | null;
  introduce: string | null;
  nickname: string;
  profileImageUrl: string;
  role: 'GUEST' | 'MEMBER' | 'CORE' | 'LEAD';
  userId: string;
  positionType: string | null;
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
  gitHubUrl: string;
  blogUrl: string;
  etcUrl: string;
  birthday: string;
  positionType: string;
}

export interface MemberInfo extends ValidationMemberInfo {
  memberInfoId: number;
  id: string;
}
