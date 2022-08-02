import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  ButtonWrapper,
  GoogleColorText,
  GoogleColorTextWrapper,
  MainBannerText,
  RecruitingWrapper,
  StyledRecruitmentButton,
} from '../../Layout/home.styled';

import { recruitmentState } from '../../store/recruitHandler';
import DownArrow from '../common/DownArrow';
import { bannerItemAnimate } from '../common/Variants/Variants';
import { HomeSectionContainer, HomeSectionContainerInner } from './styled';

const HomePage = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <RecruitingWrapper variants={bannerItemAnimate}>
          <GoogleColorTextWrapper>
            <GoogleColorText color={'googleBlue'}>2</GoogleColorText>
            <GoogleColorText color={'googleRed'}>n</GoogleColorText>
            <GoogleColorText color={'googleYellow'}>d</GoogleColorText>
            <GoogleColorText color={'googleGreen'}>.</GoogleColorText>
          </GoogleColorTextWrapper>
          <GoogleColorText>Recruit</GoogleColorText>
          <MainBannerText variants={bannerItemAnimate}>
            2022. 06. 13 ~ 2022. 08. 19
          </MainBannerText>
          <HomeRecruitmentButton />
        </RecruitingWrapper>
        <DownArrow />
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
