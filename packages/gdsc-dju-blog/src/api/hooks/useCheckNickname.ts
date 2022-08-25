import React from 'react';
import { useMutation } from 'react-query';
import UserService from '../UserService';

export function useCheckNickname(
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const {
    data: validationData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(UserService.checkUserNickname, {
    onSuccess: () => {
      setIsSuccess(true);
    },
  });

  return {
    validationData,
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  };
}
