import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAtom } from 'jotai';

import { signInAdminWithGoogle } from '@utils/adminAuth';
import { alertAtom } from '@src/store/alertAtom';
import { authAtom } from '@src/store/authAtom';
import { loaderAtom } from '@src/store/loaderAtom';
import { setUserAtom } from '@src/store/userAtom';

import GDSCImage from '../../assets/logos/GDSCLogo.svg';
import GithubLogo from '../../assets/logos/GithubLogo.svg';
import GoogleLogo from '../../assets/logos/GoogleLogo.svg';
import SolarSystem from '../../components/layout/SolarSystem';

import {
  AuthBoxInner,
  AuthBoxWrapper,
  AuthElementWrapper,
  AuthLogoText,
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
  const navigate = useNavigate();
  const [, setLoading] = useAtom(loaderAtom);
  const [, setAlert] = useAtom(alertAtom);
  const [, setUser] = useAtom(setUserAtom);
  const [, setAuthState] = useAtom(authAtom);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const googleLogin = async () => {
    if (isSigningIn) {
      return;
    }

    setIsSigningIn(true);
    setLoading({ isLoading: true });

    try {
      const user = await signInAdminWithGoogle();

      setUser(user);
      setAuthState({
        isInitializing: false,
        isAuthenticated: true,
      });
      navigate('/certified', { replace: true });
    } catch (error) {
      setAlert({
        alertHandle: true,
        alertStatus: 'ERROR',
        alertMessage:
          error instanceof Error
            ? error.message
            : 'Google 로그인에 실패했어요.',
      });
    } finally {
      setLoading({ isLoading: false });
      setIsSigningIn(false);
    }
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
            <AuthSubTitle>
              Google 계정으로 간단히 로그인할 수 있어요.
            </AuthSubTitle>
          </AuthElementWrapper>
          <ButtonWrapper>
            <OAuthLoginButton
              type={'google'}
              onClick={googleLogin}
            />
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
