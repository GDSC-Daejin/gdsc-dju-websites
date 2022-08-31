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
  const path = window.location.pathname;
  const isBoardingPass = path.includes('init');
  return (
    <BoardingPassContainerInner
      isBoardingPass={isBoardingPass}
      layoutId={'boardingPass-wrapper'}
    >
      <BoardingPassInner layout>{children}</BoardingPassInner>
      <BoardingPassLeftContainerInner isBoardingPass={isBoardingPass} layout>
        <BoardingPassTopLeftLine layout>
          <LogoWrapper layout>
            <TopLineGDSCLogo src={GDSCLogo} />
            <BoardingPassHeaderText>GDSC DJU</BoardingPassHeaderText>
          </LogoWrapper>
        </BoardingPassTopLeftLine>
        <ContainerBottomLeftLine layout />
      </BoardingPassLeftContainerInner>
      <BoardingPassRightContainerInner isBoardingPass={isBoardingPass} layout>
        <BoardingPassTopRightLine layout>
          <LogoWrapper layout>
            <BoardingPassHeaderText>Boarding Pass</BoardingPassHeaderText>
            <TopLineGDSCLogo src={Airplane} />
          </LogoWrapper>
        </BoardingPassTopRightLine>
        <ContainerBottomRightLine layout>
          <BoardingPassContainerBottomText layout>
            Google Developer Student Clubs
          </BoardingPassContainerBottomText>
        </ContainerBottomRightLine>
      </BoardingPassRightContainerInner>
      <BackgroundGDSCLogoWrapper layoutId={'bottom-icon'}>
        <GDSCLogoClear color={theme.colors.blue300} />
      </BackgroundGDSCLogoWrapper>
    </BoardingPassContainerInner>
  );
};

export default BoardingPassContainer;
