import { useMutation } from 'react-query';
import UserService from '../UserService';

export function useCheckNickname() {
  const {
    data: CheckNicknameData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(UserService.checkUserNickname);

  return {
    CheckNicknameData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
