import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { recruitmentState } from '../../store/recruitHandler';
import DownArrow from '../common/DownArrow';
import { bannerItemAnimate } from '../common/Variants/Variants';
import {
  ButtonWrapper,
  GoogleColorText,
  GoogleColorTextWrapper,
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionWrapper,
  MainBannerText,
  RecruitingWrapper,
  StyledRecruitmentButton,
} from './styled';

export const HomeMainWrapper = styled(HomeSectionWrapper)`
  width: 100%;
  height: 100%;
`;

const HomePage = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <HomeMainWrapper>
          <RecruitingWrapper variants={bannerItemAnimate}>
            <GoogleColorTextWrapper>
              <GoogleColorText color={'blue900'}>2</GoogleColorText>
              <GoogleColorText color={'red900'}>n</GoogleColorText>
              <GoogleColorText color={'yellow900'}>d</GoogleColorText>
              <GoogleColorText color={'green900'}>.</GoogleColorText>
            </GoogleColorTextWrapper>
            <GoogleColorText>Recruit</GoogleColorText>
            <MainBannerText variants={bannerItemAnimate}>
              2022. 06. 13 ~ 2022. 08. 19
            </MainBannerText>
            <HomeRecruitmentButton />
          </RecruitingWrapper>
          <DownArrow />
        </HomeMainWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};
const HomeRecruitmentButton = () => {
  const [recruit] = useRecoilState(recruitmentState);
  const navigate = useNavigate();
  return (
    <ButtonWrapper variants={bannerItemAnimate}>
      {recruit.home ? (
        <StyledRecruitmentButton
          onClick={() => {
            navigate('/recruit');
          }}
        >
          지원하기
        </StyledRecruitmentButton>
      ) : (
        <StyledRecruitmentButton disable={true}>
          지원기간이 아닙니다.
        </StyledRecruitmentButton>
      )}
    </ButtonWrapper>
  );
};

export default HomePage;
