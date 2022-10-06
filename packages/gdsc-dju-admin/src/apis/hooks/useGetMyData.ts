import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { getMyData } from '../UserService';

export const getUserData = async () => {
  const response = await getMyData();
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { data: userData } = useQuery(
    [`myData-${token}`],
    () => getUserData(),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      enabled: !!token,
      onError: () => {
        localStorage.removeItem('token');
        navigate('/');
      },
    },
  );
  return { userData: userData ?? userData };
};
