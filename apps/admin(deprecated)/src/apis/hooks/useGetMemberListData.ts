import { useQuery } from 'react-query';

import { getMemberListData } from '../UserService';

export const getMemberList = async () => {
  const response = await getMemberListData();
  return response.data.body.data;
};

export const useGetMemberListData = () => {
  const { data: memberListData } = useQuery(
    [`memberListData`],
    () => getMemberList(),
    {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  );
  return { memberListData: memberListData ?? memberListData };
};
