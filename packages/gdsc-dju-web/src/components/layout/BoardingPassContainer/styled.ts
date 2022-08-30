import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const BoardingPassContainerInner = styled(motion.div)<{
  isBoardingPass: boolean;
}>`
  width: 1200px;
  height: 495px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  ${({ isBoardingPass }) =>
    isBoardingPass &&
    css`
      height: 100vh;
      width: 100vw;
    `}
`;
export const BoardingPassLeftContainerInner = styled(motion.div)<{
  isBoardingPass: boolean;
}>`
  width: 850px;
  height: 495px;
  position: relative;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  ${({ isBoardingPass }) =>
    isBoardingPass &&
    css`
      height: 100vh;
      width: 100vw;
      box-shadow: none;
      flex: 2;
    `}
`;

export const BoardingPassRightContainerInner = styled(motion.div)<{
  isBoardingPass: boolean;
}>`
  width: 350px;
  height: 495px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  ${({ isBoardingPass }) =>
    isBoardingPass &&
    css`
      height: 100vh;
      width: 100vw;
      box-shadow: none;
      flex: 1;
    `}
`;
export const BoardingPassInner = styled.main`
  position: absolute;
  z-index: 2;
`;

export const BoardingPassTopLeftLine = styled.div`
  top: 0;
  position: relative;
  height: 66px;
  background: ${({ theme }) => theme.colors.blue600};
  border-radius: 20px 20px 0 0;
  border-bottom: dashed 2px ${({ theme }) => theme.colors.blue900};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  width: 100%;
`;
export const BoardingPassTopRightLine = styled(BoardingPassTopLeftLine)`
  justify-content: flex-end;
  width: 100%;
`;

export const ContainerBottomLeftLine = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 33px;
  background: ${({ theme }) => theme.colors.blue600};
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
  padding-right: 30px;
`;
export const ContainerBottomRightLine = styled(ContainerBottomLeftLine)`
  width: 100%;
`;
export const BoardingPassContainerBottomText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body4};
`;

export const BoardingPassHeaderText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.h6};
  font-weight: bold;
  margin-right: 8px;
`;
export const BackgroundGDSCLogoWrapper = styled.picture`
  position: absolute;
  bottom: 60px;
  right: 20px;
  z-index: -1;
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TopLineGDSCLogo = styled.img`
  height: 34px;
  margin-right: 8px;
`;
