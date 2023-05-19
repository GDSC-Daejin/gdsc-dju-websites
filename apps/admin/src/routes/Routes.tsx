import React from 'react';
import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={'/'} element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
