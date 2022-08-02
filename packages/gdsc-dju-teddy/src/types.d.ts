export type rowScoreBoardType = {
  error: boolean;
  code: number;
  message: string;
  data: [
    {
      username: string;
      name: string;
      avatar: string;
      memberType: string;
      score: number;
    },
  ];
};
export type scoreBoardType = {
  data: userDataType[];
};
export type userDataType = {
  username: string;
  name: string;
  avatar: string;
  memberType: string;
  score: number;
};
export type rowUserStateDataType = {
  error: boolean;
  code: number;
  data: userStateDataType;
  message: string;
};
export type userStateDataType = {
  user: {
    avatar: string;
    given: number;
    givenToday: number;
    memberType: string;
    name: string;
    received: number;
    receivedToday: number;
    username: string;
  };
  received: [
    {
      avatar: string;
      memberType: string;
      name: string;
      scoredec: number;
      scoreinc: number;
      username: string;
    },
  ];
  receivedToday: [
    {
      avatar: string;
      memberType: string;
      name: string;
      scoredec: number;
      scoreinc: number;
      username: string;
    },
  ];
  given: [
    {
      avatar: string;
      memberType: string;
      name: string;
      scoredec: number;
      scoreinc: number;
      username: string;
    },
  ];
  givenToday: [
    {
      avatar: string;
      memberType: string;
      name: string;
      scoredec: number;
      scoreinc: number;
      username: string;
    },
  ];
};
