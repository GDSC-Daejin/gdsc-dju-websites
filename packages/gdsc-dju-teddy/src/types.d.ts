export type rowScoreBoardType = {
  error: boolean;
  code: number;
  message: string;
  data:userDataType[];
};

export type userDataType = {
  id: string;
  displayName: string;
  profileImage: string;
  count: number;
},
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
