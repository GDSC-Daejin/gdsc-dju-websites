import React from 'react';
import { useCheckNickname } from '@src/api/hooks/useCheckNickname';
import { GDSCButton } from '@src/components/atoms/Button';

export interface INicknameValidationButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  nickname: string;
  // setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const NicknameValidationButton: React.FC<INicknameValidationButton> = ({
  nickname,
  // setIsChecked,
}) => {
  const { validationData, mutate, isLoading, isError, error, isSuccess } =
    useCheckNickname();
  const handleClick = () => {
    mutate(nickname);
    // validationData && setIsChecked(true);
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
