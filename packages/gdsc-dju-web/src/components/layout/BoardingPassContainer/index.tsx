import Airplane from '@assets/icons/airplaneIcon.svg';
import GDSCLogoClear from '@assets/logos/GDSCLogoClear';
import GDSCLogo from '@assets/logos/OnBoardTopGDSCLogo.svg';
import React from 'react';
import { useTheme } from 'styled-components';
import {
  BackgroundGDSCLogoWrapper,
  BoardingPassContainerBottomText,
  BoardingPassContainerInner,
  BoardingPassHeaderText,
  BoardingPassInner,
  BoardingPassLeftContainerInner,
  BoardingPassRightContainerInner,
  BoardingPassTopLeftLine,
  BoardingPassTopRightLine,
  ContainerBottomLeftLine,
  ContainerBottomRightLine,
  LogoWrapper,
  TopLineGDSCLogo,
} from './styled';

interface BoardingPassBoxProps {
  children: React.ReactNode;
}

const BoardingPassContainer = ({ children }: BoardingPassBoxProps) => {
  const theme = useTheme();
  const isBoardingPass = false;
  return (
    <BoardingPassContainerInner isBoardingPass={isBoardingPass}>
      <BoardingPassInner>{children}</BoardingPassInner>
      <BoardingPassLeftContainerInner isBoardingPass={isBoardingPass}>
        <BoardingPassTopLeftLine>
          <LogoWrapper>
            <TopLineGDSCLogo src={GDSCLogo} />
            <BoardingPassHeaderText>GDSC DJU</BoardingPassHeaderText>
          </LogoWrapper>
        </BoardingPassTopLeftLine>
        <ContainerBottomLeftLine />
      </BoardingPassLeftContainerInner>
      <BoardingPassRightContainerInner isBoardingPass={isBoardingPass}>
        <BoardingPassTopRightLine>
          <LogoWrapper>
            <BoardingPassHeaderText>Boarding Pass</BoardingPassHeaderText>
            <TopLineGDSCLogo src={Airplane} />
          </LogoWrapper>
        </BoardingPassTopRightLine>
        <ContainerBottomRightLine>
          <BoardingPassContainerBottomText>
            Google Developer Student Clubs
          </BoardingPassContainerBottomText>
        </ContainerBottomRightLine>
      </BoardingPassRightContainerInner>
      <BackgroundGDSCLogoWrapper>
        <GDSCLogoClear color={theme.colors.blue300} />
      </BackgroundGDSCLogoWrapper>
    </BoardingPassContainerInner>
  );
};

export default BoardingPassContainer;
