import { pageTransitionAnimate } from '@animations/onboard';
import AirplaneBreadcrumb from '@common/AirplaneBreadcrumb';
import UnderlineInput from '@common/input/UnderlineInput';
import OnboardButton from '@common/onboardButton';
import {
  OnBoardContentSubTitle,
  OnBoardContentTitle,
  OnBoardContentWrapper,
} from '@pages/Onboard/OnboardContent/styled';
import { useParams } from 'react-router-dom';
import {
  OnboardContentBox,
  OnboardContentButtonWrapper,
  OnboardContentsWrapper,
} from '../styled';
import { OnboardSectionContainer } from '@pages/Onboard/styled';
import React from 'react';

const OnboardContent = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <OnboardSectionContainer layoutId={'content-box'}>
      <OnboardContentsWrapper
        variants={pageTransitionAnimate}
        initial="start"
        animate="end"
        exit={'out'}
      >
        <div>
          <AirplaneBreadcrumb />
        </div>
        <OnboardContentBox>
          <OnBoardContentWrapper>
            <OnBoardContentSubTitle>
              여러분을 뭐라고 부르면 될까요?
            </OnBoardContentSubTitle>
            <OnBoardContentTitle>이름을 알려주세요.</OnBoardContentTitle>
            <UnderlineInput placeholder={'Jason'} />
          </OnBoardContentWrapper>
        </OnboardContentBox>
        <OnboardContentButtonWrapper>
          <OnboardButton>다음으로</OnboardButton>
        </OnboardContentButtonWrapper>
      </OnboardContentsWrapper>
    </OnboardSectionContainer>
  );
};

export default OnboardContent;
