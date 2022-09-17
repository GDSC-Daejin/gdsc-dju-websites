import { ColorToken } from '@gdsc-dju/styled-components';
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
  height: 100vh;
  ${({ color }) =>
    color &&
    css`
      background: ${({ theme }) => theme.colors[color]};
    `};
`;
export const HomeSectionContainerInner = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100vw;
  min-height: 100vh;
  max-width: 92%;
  margin: 0 auto;
  min-width: 320px;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.windowSizes.desk}px) {
    max-width: 1160px;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    max-width: 800px;
  }
`;
export const HomeSectionWrapper = styled(motion.div)`
  margin: 0 auto;
  max-width: 92%;
  width: 92%;
  padding: 50px 2rem;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    max-width: 600px;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    max-width: 330px;
  }
`;
export const HomeSectionTitle = styled(motion.h1)`
  display: block;

  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSizes.titleXl};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
  }
`;
export const StyledRecruitmentButton = styled.button<{ disable?: boolean }>`
  width: 22rem;
  height: 6rem;
  border-radius: 7.5rem;
  border-style: solid;
  background: ${({ theme }) => theme.colors.blue600};
  border-width: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  cursor: pointer;
  ${({ disable }) =>
    disable &&
    css`
      background: ${({ theme }) => theme.colors.blue200};
      cursor: not-allowed;
    `};
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    width: 18rem;
    height: 5.5rem;
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }
`;

export const RecruitingWrapper = styled(motion.div)`
  position: absolute;
  left: 20px;
  bottom: 12%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.windowSizes.desk}px) {
    bottom: 12%;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    bottom: 10%;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    bottom: 10%;
  }
  @media (max-width: 320px) {
    bottom: 10%;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  margin-top: 30px;
`;

export const GoogleColorTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const GoogleColorText = styled.h1<{
  color?: ColorToken;
}>`
  font-size: 70px;
  font-weight: bold;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey900};
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.titleXl};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
`;
export const MainBannerText = styled(motion.p)`
  display: flex;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey500};
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
`;
