import React from 'react';

import { LayoutContainer } from '@styles/layouts';

import SignUpForm from './SignUpForm';
import { SignUpContentWrapper, SignUpFormTitle } from './styled';

const SignUp = () => {
  return (
    <LayoutContainer>
      <SignUpContentWrapper>
        <SignUpFormTitle>회원가입</SignUpFormTitle>
        <SignUpForm />
      </SignUpContentWrapper>
    </LayoutContainer>
  );
};

export default SignUp;
