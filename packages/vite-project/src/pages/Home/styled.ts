import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { lightColors } from '../../styles/lightColors';

export const HomeWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;
export const StyledRecruitmentButton = styled.button<{ disable?: boolean }>`
  width: 22rem;
  height: 6rem;
  border-radius: 7.5rem;
  border-style: solid;
  background: ${({ theme }) => theme.colors.tossBlueActive};
  border-width: 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  ${({ disable }) =>
    disable &&
    css`
      background: ${({ theme }) => theme.colors.tossBlue200};
      cursor: not-allowed;
    `};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    width: 18rem;
    height: 5.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
    font-size: 1.3rem;
  }
`;
export const StyledMainBanner = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: hidden;
  z-index: -1;
  top: 0;
`;
export const BannerTitleWrapper = styled(motion.section)`
  position: absolute;
  bottom: 14%;
  left: 10%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    bottom: 14%;
    left: 10%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    bottom: 10%;
    left: 10%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    bottom: 12%;
    left: 10%;
  }
  @media (max-width: 320px) {
    bottom: 10%;
    left: 10%;
  }
`;
export const RecruitingWrapper = styled(motion.div)`
  position: relative;
  justify-content: flex-start;
  left: 0;
  z-index: 50;
`;

export const LeftColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;
  left: -200px;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    bottom: 100px;
    width: 300px;
    left: -100px;
  }
`;
export const RightColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 50rem;
  width: 40%;
  right: -20rem;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    top: 200px;
    width: 30rem;
    right: -10rem;
  }
  @media (max-width: 760px) {
    top: -5rem;
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
  color?: keyof typeof lightColors;
}>`
  font-size: 70px;
  font-weight: bold;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.grey900};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
  @media (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;
export const MainBannerText = styled(motion.p)`
  display: flex;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey500};
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    font-size: 1.5rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;
export const DownArrowWrapper = styled(motion.div)`
  position: absolute;
  bottom: 5%;
  display: flex;
  width: 100vw;
  justify-content: center;
  opacity: 50;
`;

export const HomeSolarSystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20%;
  top: 20%;
  z-index: -1;
  transform: translate(0%, -50%);
  @media (max-width: 500px) {
    left: 100%;
    top: 10%;
    transform: scale(0.6, 0.6);
  }
`;
