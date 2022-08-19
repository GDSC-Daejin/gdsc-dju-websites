import { UserInfoData } from './userInfoData';

export interface UserData {
  email: string;
  emailVerifiedYn: string;
  memberInfo: UserInfoData;
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface RowUserData {
  header: { code: string };
  body: {
    data: UserData;
  };
}
