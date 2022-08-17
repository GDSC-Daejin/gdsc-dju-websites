import { useMutation } from 'react-query';
import UserService from '../UserService';

export function useCheckNickname() {
  const {
    data: validationData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(UserService.checkUserNickname);

  return {
    validationData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
