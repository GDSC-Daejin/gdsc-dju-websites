import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import UserService from '../UserService';

export const getMyData = async (token: string) => {
  const response = await UserService.getMyData(token);
  return response.data.body.data;
};

export const useGetMyData = () => {
  const token = localStorage.getItem('token');
  const refresh_token = localStorage.getItem('refresh_token');
  const navigate = useNavigate();
  const isLoggedIn = token && refresh_token;
  const { data: userData } = useQuery(
    [token, token],
    () => getMyData(token as string),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      enabled: !!isLoggedIn,
      onError: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        navigate('/');
      },
    },
  );
  return { userData: userData ?? userData };
};
