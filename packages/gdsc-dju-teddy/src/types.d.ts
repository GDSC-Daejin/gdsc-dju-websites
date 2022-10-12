export type RowScoreBoard = {
  error: boolean;
  code: number;
  message: string;
  data: User[];
};

export type User = {
  id: string;
  displayName: string;
  profileImage: string;
  count: number;
};
export type RowUserState = {
  error: boolean;
  code: number;
  data: UserState;
  message: string;
};
export type UserState = {
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
