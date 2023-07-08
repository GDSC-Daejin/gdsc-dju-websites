import { ColorToken } from '@gdsc-dju/styled-components-theme';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const MemberCardContainer = styled(motion.div)<{ isSquare: boolean }>`
  position: relative;
  min-width: 250px;
  min-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  ${({ isSquare }) =>
    isSquare &&
    css`
      min-height: 250px;
    `}
`;
export const MemberCardInner = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
`;
export const MemberCardImage = styled(motion.img)<{ isSquare: boolean }>`
  z-index: -1;
  height: 300px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position-x: 50%;
  background-position-y: 50%;
  border-radius: 16px;
  ${({ isSquare }) =>
    isSquare &&
    css`
      height: 250px;
    `}
`;
export const Position = styled(motion.p)<{
  positionColor: ColorToken | undefined;
}>`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  line-height: 24px;
  ${({ positionColor }) =>
    positionColor &&
    css`
      color: ${({ theme }) => theme.colors[positionColor]};
    `};
`;
export const Nickname = styled(motion.p)`
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: #ffffff;
`;
export const Name = styled(motion.p)`
  height: 24px;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  line-height: 24px;
  color: #ffffff;
`;
export const Role = styled(motion.p)`
  height: 24px;
  margin: 0 0 8px 0;
  overflow-y: hidden;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue900};
`;
export const CardText = styled(motion.div)`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: #ffffff;
  display: block;
`;
export const CardTextWrapper = styled(motion.div)<{ isClicked?: boolean }>`
  position: absolute;
  padding: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0) 40%;
  border: 0 solid transparent;
  border-radius: 16px;
  ${({ isClicked }) =>
    isClicked
      ? css`
          background: rgba(0, 0, 0, 0.4) 40%;
          backdrop-filter: blur(2px);
        `
      : css`
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 40%,
            rgba(0, 0, 0, 0.4) 100%
          );
          transition: background 0.2s ease-in-out;
        `}
`;
