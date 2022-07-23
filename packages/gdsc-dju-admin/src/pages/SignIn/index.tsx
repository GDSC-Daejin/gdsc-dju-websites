import React, { ChangeEvent, useState } from 'react';
import TokenService from '../../apis/TokenService';
import {
  AuthBoxInner,
  AuthBoxWrapper,
  AuthButtonWrapper,
  AuthElementWrapper,
  AuthErrorText,
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
import GDSCImage from '../../assets/logos/GDSCLogo.svg';
import GoogleLogo from '../../assets/logos/GoogleLogo.svg';
import GithubLogo from '../../assets/logos/GithubLogo.svg';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import SolarSystem from '../../components/SolarSystem';
import { auth } from '../../firebase/firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEmailLogIn();
    }
  };

  const onEmailLogIn = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          user && navigate('/redirect');
        },
      );
    } catch (e) {
      switch (e) {
        case 'auth/email-already-in-use':
          return setError('이미 사용 중인 이메일입니다.');
        case 'auth/invalid-email':
          return setError('해당 이메일 주소로 등록된 계정을 찾을 수 없습니다.');
        case 'operation-not-allowed':
          return setError('이메일 가입이 중지되었습니다.');
        case 'auth/weak-password':
          return setError('비밀번호를 6자리 이상 입력하세요.');
        case 'auth/user-not-found':
          return setError('올바르지 않은 유저정보입니다.');
        case 'auth/wrong-password':
          return setError('올바르지 않은 비밀번호입니다.');
        default:
      }
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const googleLogin = () => {
    return TokenService.getRedirectURL();
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
              onKeyPress={onKeyPress}
              onChange={onChange}
              placeholder={'gdsc@gmail.com'}
            />
          </AuthElementWrapper>
          <AuthElementWrapper direction={'column'}>
            <AuthSubTitle>비밀번호</AuthSubTitle>
            <AuthInput
              type={'password'}
              name={'password'}
              onKeyPress={onKeyPress}
              onChange={onChange}
              placeholder={'password'}
            />
          </AuthElementWrapper>
          <AuthErrorText>{error}</AuthErrorText>
          <AuthButtonWrapper>
            <AuthSignButton
              onClick={() => {
                onEmailLogIn();
              }}
            >
              로그인
            </AuthSignButton>
          </AuthButtonWrapper>
          <AuthElementWrapper align={'center'}>
            <AuthLine />
            <AuthOtherText>또는</AuthOtherText>
            <AuthLine />
          </AuthElementWrapper>
          <ButtonWrapper>
            <OAuthLoginButton
              type={'google'}
              onClick={() => (location.href = googleLogin())}
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
