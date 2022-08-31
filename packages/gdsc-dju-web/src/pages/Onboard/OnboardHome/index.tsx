import { pageTransitionAnimate } from '@animations/onboard';

import GDSCLogo from '@assets/logos/GDSCLogo.svg';
import OnboardButton from '@common/onboardButton';
import {
  OnboardHomeLogo,
  OnboardHomePhrase,
  OnboardHomePhraseWrapper,
} from '@pages/Onboard/OnboardHome/styled';
import React from 'react';
import { useNavigate } from 'react-router';
import {
  OnboardContentBox,
  OnboardContentButtonWrapper,
  OnboardContentsWrapper,
  OnboardSectionContainer,
} from '../styled';

export const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}.${month}.${day}`;
};

// variants={pageTransitionAnimate}
//         initial="start"
//         animate="end"
//         exit={'out'}
//variants={onboardAnimate}
const OnboardHome = () => {
  const navigate = useNavigate();
  return (
    <OnboardSectionContainer layoutId={'content-box'}>
      <OnboardContentsWrapper
        variants={pageTransitionAnimate}
        initial="start"
        animate="end"
        exit={'out'}
      >
        <div></div>
        <OnboardContentBox>
          <OnboardHomePhraseWrapper>
            <OnboardHomeLogo src={GDSCLogo} />
            <OnboardHomePhrase>GDSC DJU</OnboardHomePhrase>
            <OnboardHomePhrase colorToken={'blue600'}>
              Member Onboarding
            </OnboardHomePhrase>
          </OnboardHomePhraseWrapper>
        </OnboardContentBox>
        <OnboardContentButtonWrapper
          onClick={() => navigate('/onboard/init/1')}
        >
          <OnboardButton>시작하기</OnboardButton>
        </OnboardContentButtonWrapper>
      </OnboardContentsWrapper>
    </OnboardSectionContainer>
  );
};

export default OnboardHome;
