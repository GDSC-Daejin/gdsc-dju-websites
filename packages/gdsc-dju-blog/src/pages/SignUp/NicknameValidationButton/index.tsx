import React from 'react';
import { useCheckNickname } from '../../../api/hooks/useCheckNickname';

const NicknameValidationButton = (nickname: string) => {
  const { validationData, mutate, isLoading, isError, error, isSuccess } =
    useCheckNickname();

  return (
    <button
      disabled={isLoading}
      onClick={() => {
        mutate(nickname);
      }}
    >
      중복확인
    </button>
  );
};

export default NicknameValidationButton;
