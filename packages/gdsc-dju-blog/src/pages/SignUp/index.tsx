import React from 'react';
import { LayoutContainer } from '../../styles/layouts';
import { SignUpContentWrapper, SignUpFormTitle } from './styled';
import SignUpForm from './SignUpForm';
import { useCheckNickname } from '../../api/hooks/useCheckNickname';

const SignUp = () => {
  const { CheckNicknameData, mutate, isLoading, isError, error, isSuccess } =
    useCheckNickname();

  return (
    <LayoutContainer>
      <SignUpContentWrapper>
        <button
          onClick={() => {
            mutate('Jason');
          }}
        >
          asd
        </button>
        <SignUpFormTitle>회원가입</SignUpFormTitle>
        <SignUpForm />
      </SignUpContentWrapper>
    </LayoutContainer>
  );
};

export default SignUp;
