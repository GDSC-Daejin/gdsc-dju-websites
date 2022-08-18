import React from 'react';
import { useCheckNickname } from '../../../api/hooks/useCheckNickname';
import { GDSCButton, GDSCButtonL } from '../../../components/common/Button';

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
  const handleClick = () => {
    mutate(nickname);
  };
  return (
    <GDSCButton
      text="중복 확인"
      type="button"
      color="grey500"
      onClick={handleClick}
    />
  );
};

export default React.memo(NicknameValidationButton);
