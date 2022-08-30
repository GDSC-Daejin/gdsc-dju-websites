import { onboardAnimate, pageTransitionAnimate } from '@animations/onboard';

import GDSCLogo from '@assets/logos/GDSCLogo.svg';
import OnboardButton from '@common/onboardButton';
import {
  OnboardHomeBox,
  OnboardHomeBoxWrapper,
  OnboardHomeButtonWrapper,
  OnboardHomeLogo,
  OnboardHomePhrase,
  OnboardHomePhraseWrapper,
} from '@pages/Onboard/OnboardHome/styled';
import React from 'react';
import { OnboardSectionContainer } from '../styled';

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
  return (
    <OnboardSectionContainer>
      <OnboardHomeBoxWrapper
        variants={pageTransitionAnimate}
        initial="start"
        animate="end"
        exit={'out'}
      >
        <OnboardHomeBox>
          <OnboardHomePhraseWrapper>
            <OnboardHomeLogo src={GDSCLogo} />
            <OnboardHomePhrase>GDSC DJU</OnboardHomePhrase>
            <OnboardHomePhrase colorToken={'blue600'}>
              Member Onboarding
            </OnboardHomePhrase>
          </OnboardHomePhraseWrapper>
        </OnboardHomeBox>
        <OnboardHomeButtonWrapper>
          <OnboardButton>시작하기</OnboardButton>
        </OnboardHomeButtonWrapper>
      </OnboardHomeBoxWrapper>
    </OnboardSectionContainer>
  );
};

export default OnboardHome;
