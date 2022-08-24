import React from 'react';
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
  } = useMutation(UserService.checkUserNickname, {
    onSuccess: (data, variables, context) => {
      console.log(data);
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
