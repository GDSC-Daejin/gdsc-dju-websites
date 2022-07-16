import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnBoardHome from './OnBoardHome';

import OnboardTicket from './OnboardTicket';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';

const OnBoard = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={'/*'} element={<OnBoardHome />} />

          <Route path={'/ticket'} element={<OnboardTicket />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default OnBoard;
