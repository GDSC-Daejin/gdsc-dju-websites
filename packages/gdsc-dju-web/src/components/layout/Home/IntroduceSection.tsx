import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { listAnimate, listItemAnimate } from '../../animations/Variants';
import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin-top: 5.1rem;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    width: 250px;
    margin-top: 2rem;
  }
`;
const ContentTitle = styled.span`
  margin-bottom: 0.9rem;
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
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
        <HomeSectionWrapper variants={listAnimate}>
          <HomeSectionTitle
            variants={listItemAnimate}
            initial={'start'}
            whileInView={'end'}
            viewport={{ once: true }}
          >
            디자이너와 개발자의 성장을 위해
          </HomeSectionTitle>
          <div>
            <ContentWrapper
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              <ContentTitle>누적 지원자 수</ContentTitle>
              <ContentText>90명 +</ContentText>
            </ContentWrapper>
            <ContentWrapper
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              <ContentTitle>전체 인원</ContentTitle>
              <ContentText>30명 +</ContentText>
            </ContentWrapper>
          </div>
          <div>
            <ContentWrapper
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              <ContentTitle>진행한 스터디/프로젝트</ContentTitle>
              <ContentText>10회 +</ContentText>
            </ContentWrapper>
            <ContentWrapper
              variants={listItemAnimate}
              initial={'start'}
              whileInView={'end'}
              viewport={{ once: true }}
            >
              <ContentTitle>진행한 이벤트</ContentTitle>
              <ContentText>100회 +</ContentText>
            </ContentWrapper>
          </div>
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default IntroduceSection;
