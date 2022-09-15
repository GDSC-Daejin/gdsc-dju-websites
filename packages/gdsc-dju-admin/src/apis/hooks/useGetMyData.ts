import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { data: userData } = useQuery(
    [`myData-${token}`],
    () => getMyData(token as string),
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
