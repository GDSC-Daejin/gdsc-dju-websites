import React from 'react';

import { getRedirectURL } from '@src/apis/TokenService';
import { firebaseLogin } from '@utils/firebaseLogin';

import GDSCImage from '../../assets/logos/GDSCLogo.svg';
import GithubLogo from '../../assets/logos/GithubLogo.svg';
import GoogleLogo from '../../assets/logos/GoogleLogo.svg';
import SolarSystem from '../../components/layout/SolarSystem';

import {
  AuthBoxInner,
  AuthBoxWrapper,
  AuthButtonWrapper,
  AuthElementWrapper,
  AuthInput,
  AuthLine,
  AuthLogoText,
  AuthOtherText,
  AuthSignButton,
  AuthSubTitle,
  AuthTitle,
  ButtonWrapper,
  GDSCLogoImage,
  OAuthButton,
  OAuthImage,
  OAuthText,
  SignInLeftSection,
  SignInSolarSystemWrapper,
  SignInWrapper,
} from './styled';

const SignIn = () => {
  const googleLogin = () => {
    return getRedirectURL();
  };

  return (
    <SignInWrapper>
      <SignInLeftSection>
        <SignInSolarSystemWrapper>
          <SolarSystem />
        </SignInSolarSystemWrapper>
      </SignInLeftSection>
      <AuthBoxWrapper>
        <AuthBoxInner>
          <AuthElementWrapper align={'center'}>
            <GDSCLogoImage src={GDSCImage} />
            <AuthLogoText border={'bold'}>GDSC</AuthLogoText>
            <AuthLogoText>Daejin Univ.</AuthLogoText>
          </AuthElementWrapper>
          <AuthElementWrapper align={'center'}>
            <AuthTitle>로그인</AuthTitle>
          </AuthElementWrapper>
          <AuthElementWrapper direction={'column'}>
            <AuthSubTitle>이메일 주소</AuthSubTitle>
            <AuthInput
              type={'email'}
              name={'email'}
              placeholder={'gdsc@gmail.com'}
            />
          </AuthElementWrapper>
          <AuthElementWrapper direction={'column'}>
            <AuthSubTitle>비밀번호</AuthSubTitle>
            <AuthInput
              type={'password'}
              name={'password'}
              placeholder={'password'}
            />
          </AuthElementWrapper>

          <AuthButtonWrapper>
            <AuthSignButton>로그인</AuthSignButton>
          </AuthButtonWrapper>
          <AuthElementWrapper align={'center'}>
            <AuthLine />
            <AuthOtherText>또는</AuthOtherText>
            <AuthLine />
          </AuthElementWrapper>
          <ButtonWrapper>
            <OAuthLoginButton type={'google'} onClick={firebaseLogin} />
          </ButtonWrapper>
        </AuthBoxInner>
      </AuthBoxWrapper>
    </SignInWrapper>
  );
};
const OAuthLoginButton: React.FC<{
  onClick?: () => void;
  type: 'google' | 'github';
}> = ({ onClick, type }) => {
  return (
    <OAuthButton onClick={onClick}>
      <OAuthImage src={type === 'google' ? GoogleLogo : GithubLogo} />
      <OAuthText weight={'bold'}>
        {type === 'google' ? 'Google' : 'Github'}
      </OAuthText>
      <OAuthText>로 계속</OAuthText>
    </OAuthButton>
  );
};

export default SignIn;
