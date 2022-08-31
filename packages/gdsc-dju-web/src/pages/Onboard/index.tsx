import BoardingPassContainer from '@layout/BoardingPassContainer';
import OnboardContent from '@pages/Onboard/OnboardContent';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import OnboardHome from './OnboardHome';
import { OnboardContainerWrapper } from './styled';

const OnBoard = () => {
  const location = useLocation();
  return (
    <LayoutGroup>
      <AnimatePresence>
        <OnboardContainerWrapper>
          <BoardingPassContainer>
            <Routes location={location} key={location.pathname}>
              <Route path={'/*'} element={<OnboardHome />} />
              <Route path={'/init/:id'} element={<OnboardContent />} />
            </Routes>
          </BoardingPassContainer>
        </OnboardContainerWrapper>
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default OnBoard;
