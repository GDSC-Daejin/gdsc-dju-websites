import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { listAnimate, listItemAnimate } from '../animations/variants';

import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 30rem;
  margin-top: 5.1rem;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    width: 250px;
    margin-top: 2rem;
  }
`;
const ContentBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    width: 250px;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2rem;
  }
`;
const ContentTitle = styled.span`
  margin-bottom: 0.9rem;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
`;
const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.titleXl};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    line-height: 1.5;
  }
`;

const IntroduceSection = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <HomeSectionWrapper
          variants={listAnimate}
          initial={'start'}
          whileInView={'end'}
          viewport={{ once: true }}
        >
          <HomeSectionTitle variants={listItemAnimate}>
            디자이너와 개발자의 성장을 위해
          </HomeSectionTitle>
          <ContentBox
            variants={listAnimate}
            initial={'start'}
            whileInView={'end'}
            viewport={{ once: true }}
          >
            <ContentWrapper variants={listItemAnimate}>
              <ContentTitle>누적 지원자 수</ContentTitle>
              <ContentText>90명 +</ContentText>
            </ContentWrapper>
            <ContentWrapper variants={listItemAnimate}>
              <ContentTitle>전체 인원</ContentTitle>
              <ContentText>30명 +</ContentText>
            </ContentWrapper>
            <ContentWrapper variants={listItemAnimate}>
              <ContentTitle>진행한 스터디/프로젝트</ContentTitle>
              <ContentText>10회 +</ContentText>
            </ContentWrapper>
            <ContentWrapper variants={listItemAnimate}>
              <ContentTitle>진행한 이벤트</ContentTitle>
              <ContentText>100회 +</ContentText>
            </ContentWrapper>
          </ContentBox>
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default IntroduceSection;
