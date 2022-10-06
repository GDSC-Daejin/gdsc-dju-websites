import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { listAnimate, listItemAnimate } from '@animations/variants';
import { culture } from '@src/contents/culture';

import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';

const CultureContentSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
  grid-gap: 50px;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 40px;
    grid-gap: 30px;
  }
`;
const CultureContentWrapper = styled(motion.div)`
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    gap: 20px;
  }
`;
const CultureTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.titleL};
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    max-width: 370px;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleS};
    max-width: 330px;
  }
`;
const CultureText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey600};
  line-height: 1.5;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }
`;

const CultureSection = () => {
  return (
    <HomeSectionContainer>
      <HomeSectionContainerInner>
        <HomeSectionWrapper>
          <HomeSectionTitle
            variants={listItemAnimate}
            initial={'start'}
            whileInView={'end'}
            viewport={{ once: true }}
          >
            GDSC DJU의 문화를 소개해요
          </HomeSectionTitle>
          <CultureContentSection variants={listItemAnimate}>
            {culture.map((data, index) => (
              <CultureContentWrapper
                key={index}
                variants={listAnimate}
                initial={'start'}
                whileInView={'end'}
                viewport={{ once: true }}
              >
                <CultureTitle>{data.title}</CultureTitle>
                <CultureText>{data.text}</CultureText>
              </CultureContentWrapper>
            ))}
          </CultureContentSection>
        </HomeSectionWrapper>
      </HomeSectionContainerInner>
    </HomeSectionContainer>
  );
};

export default CultureSection;
