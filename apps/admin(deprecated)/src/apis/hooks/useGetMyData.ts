import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyData } from '../UserService';

export const getUserData = async () => {
  const response = await getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const navigate = useNavigate();
  const { data: userData } = useQuery([`myData`], () => getUserData(), {
    retry: 2,
    refetchOnWindowFocus: false,
    onError: () => {
      navigate('/');
    },
  });
  return { userData: userData ?? userData };
};
