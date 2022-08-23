import React from 'react';

import { SignUpContentWrapper, SignUpFormTitle } from './styled';
import SignUpForm from './SignUpForm';
import { LayoutContainer } from '@styles/layouts';

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
