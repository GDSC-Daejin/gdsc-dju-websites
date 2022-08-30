import WorldMap from '@assets/images/worldMap.svg';
import BoardingPassContainer from '@layout/BoardingPassContainer';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import OnboardHome from './OnboardHome';
import { OnboardContainerWrapper } from './styled';

const OnBoard = () => {
  const location = useLocation();
  return (
    <>
      <OnboardContainerWrapper>
        <BoardingPassContainer>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path={'/*'} element={<OnboardHome />} />
            </Routes>
          </AnimatePresence>
        </BoardingPassContainer>
      </OnboardContainerWrapper>
    </>
  );
};

export default OnBoard;
