import React from 'react';
import styled from 'styled-components';
import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';
import { listAnimate, listItemAnimate } from '../common/Variants/Variants';
import { motion } from 'framer-motion';

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-top: 5.1rem;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 250px;
    margin-top: 2rem;
  }
`;
const ContentTitle = styled.span`
  margin-bottom: 0.9rem;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
    line-height: 1.5;
  }
`;

const SectionIntroduce = () => {
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
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default SectionIntroduce;
