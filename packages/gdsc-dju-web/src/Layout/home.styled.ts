import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { lightColors } from '../styles/lightColors';

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

export const RecruitingWrapper = styled(motion.div)`
  position: absolute;
  left: 20px;
  bottom: 12%;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    bottom: 14%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    bottom: 10%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
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
