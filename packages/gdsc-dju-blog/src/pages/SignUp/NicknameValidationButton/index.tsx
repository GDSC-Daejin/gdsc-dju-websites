import React from 'react';
import { useCheckNickname } from '../../../api/hooks/useCheckNickname';

export interface INicknameValidationButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  nickname: string;
}

const NicknameValidationButton: React.FC<INicknameValidationButton> = ({
  nickname,
}) => {
  const { validationData, mutate, isLoading, isError, error, isSuccess } =
    useCheckNickname();

  console.log(validationData);

  return (
    <button
      disabled={isLoading}
      type="button"
      onClick={() => {
        mutate(nickname);
      }}
    >
      중복확인
    </button>
  );
};

export default React.memo(NicknameValidationButton);
