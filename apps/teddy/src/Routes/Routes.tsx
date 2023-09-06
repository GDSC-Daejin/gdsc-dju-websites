import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <>
      <ReactRoutes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/weekly'} element={<Home />} />
        <Route path={'/monthly'} element={<Home />} />
        <Route path={'/*'} element={<Home />} />
      </ReactRoutes>
    </>
  );
};

export default Routes;
