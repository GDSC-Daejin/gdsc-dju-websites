export interface memberDataType {
  image: string;
  nickname: string;
  name: string;
  text: string;
  role: string;
}
export interface UserDataType {
  email: string;
  emailVerifiedYn: string;
  memberInfo: {
    generation: number;
    gitEmail: string;
    hashTag: string;
    introduce: string;
    major: string;
    memberInfoId: number;
    birthday: string;
    memberPortfolioUrls: {
      id: number;
      webUrl: string | null;
    }[];
    nickname: string;
    phoneNumber: string;
    positionType: string;
    studentID: string;
    userID: string;
  };
  modifiedAt: string;
  password: string;
  profileImageUrl: string;
  providerType: string;
  role: string;
  uploadDate: string;
  userId: string;
  username: string;
}
export interface IMemberCardType {
  image: string;
  position: string;
  nickname: string;
  name: string;
  role: string;
  text: string;
}
