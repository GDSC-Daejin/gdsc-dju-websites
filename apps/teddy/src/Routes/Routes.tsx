import React from 'react';
import { Route, Routes as ReactRoutes } from 'react-router-dom';

import Weekly from '../pages/Weekly';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={'/'} element={<Weekly />} />
    </ReactRoutes>
  );
};

export default Routes;
