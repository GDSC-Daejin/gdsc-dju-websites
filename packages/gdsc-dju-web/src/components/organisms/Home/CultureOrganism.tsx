import React from 'react';
import styled from 'styled-components';
import {
  HomeSectionContainer,
  HomeSectionContainerInner,
  HomeSectionTitle,
  HomeSectionWrapper,
} from './styled';

import { motion } from 'framer-motion';
import { listAnimate, listItemAnimate } from '../../Variants/Variants';
import { culture } from '../../../contents/culture';

const CultureContentSection = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;
  grid-gap: 50px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
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
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    gap: 20px;
  }
`;
const CultureTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
    max-width: 370px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h5};
    max-width: 330px;
  }
`;
const CultureText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  line-height: 1.5;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;

const CultureOrganism = () => {
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

export default CultureOrganism;
