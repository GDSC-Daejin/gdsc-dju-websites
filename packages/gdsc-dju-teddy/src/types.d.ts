export type rowScoreBoardType = {
  error: boolean;
  code: number;
  message: string;
  data: userDataType[];
};

export type userDataType = {
  id: string;
  displayName: string;
  profileImage: string;
  count: number;
};
export type rowUserStateDataType = {
  error: boolean;
  code: number;
  data: userStateDataType;
  message: string;
};
export type userStateDataType = {
  user: {
    id: string;
    displayName: string;
    profileImage: string;
    received: number;
    given: number;
  };
  received: [
    {
      id: string;
      displayName: string;
      profileImage: string;
      count: number;
    },
  ];
  given: [
    {
      id: string;
      displayName: string;
      profileImage: string;
      count: number;
    },
  ];
};
