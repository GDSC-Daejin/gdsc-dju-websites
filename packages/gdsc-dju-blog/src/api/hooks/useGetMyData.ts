import { useQuery } from 'react-query';
import UserService from '../UserService';

export const getMyData = async () => {
  const response = await UserService.getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const { data: myData } = useQuery([`userdata`], () => getMyData(), {
    suspense: true,

    retry: 0,
  });

  return { myData: myData && myData };
};
