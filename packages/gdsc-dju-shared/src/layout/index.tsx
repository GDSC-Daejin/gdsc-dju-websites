import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactHead from '../components/ReactHead';
import Contributors from '../pages/Contributors';
import Events from '../pages/Events';
import Faq from '../pages/Faq';
import Home from '../pages/Home';

const Index = () => {
  const location = useLocation();
  return (
    <>
      <ReactHead />
      <AnimatePresence>
        <Routes key={location.pathname}>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/faq'} element={<Faq />} />
          <Route path={'/contributors'} element={<Contributors />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Index;
