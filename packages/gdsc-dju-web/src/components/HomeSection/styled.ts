import { ColorToken } from '@gdscdju/shared';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const HomeSectionContainer = styled(motion.div)<{
  color?: ColorToken;
}>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) => theme.colors[color]};
    `};
`;
export const HomeSectionContainerInner = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  max-width: 80%;
  margin: 0 auto;
  min-width: 320px;

  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    max-width: 1160px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    max-width: 800px;
  }
`;
export const HomeSectionWrapper = styled(motion.div)`
  margin: 50px auto;
  max-width: 1090px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    max-width: 700px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    max-width: 600px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    max-width: 330px;
  }
`;
export const HomeSectionTitle = styled(motion.h1)`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;
