import { pageTransitionAnimate } from '@animations/onboard';
import AirplaneBreadcrumb from '@common/AirplaneBreadcrumb';
import UnderlineInput from '@common/input/UnderlineInput';
import OnboardButton from '@common/onboardButton';
import {
  OnBoardContentSubTitle,
  OnBoardContentTitle,
  OnBoardContentWrapper,
} from '@pages/Onboard/OnboardContent/styled';
import { onBoardingData } from '@src/contents/onboard';
import { useNavigate, useParams } from 'react-router-dom';
import {
  OnboardContentBox,
  OnboardContentButtonWrapper,
  OnboardContentsWrapper,
} from '../styled';
import { OnboardSectionContainer } from '@pages/Onboard/styled';
import React from 'react';

const OnboardContent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const content = onBoardingData.find((data) => data.id === id);
  return (
    <OnboardSectionContainer layoutId={'content-box'}>
      {content && (
        <OnboardContentsWrapper
          variants={pageTransitionAnimate}
          initial="start"
          animate="end"
          exit={'out'}
        >
          <OnboardContentBox>
            <OnBoardContentWrapper>
              <OnBoardContentSubTitle>
                {content.subTitle}
              </OnBoardContentSubTitle>
              <OnBoardContentTitle>{content.title}</OnBoardContentTitle>
              <UnderlineInput placeholder={content.placeHolder} />
            </OnBoardContentWrapper>
          </OnboardContentBox>
          <OnboardContentButtonWrapper>
            <OnboardButton
              onClick={() => navigate(`/onboard/init/${content.next}`)}
            >
              다음으로
            </OnboardButton>
          </OnboardContentButtonWrapper>
        </OnboardContentsWrapper>
      )}
    </OnboardSectionContainer>
  );
};

export default OnboardContent;
