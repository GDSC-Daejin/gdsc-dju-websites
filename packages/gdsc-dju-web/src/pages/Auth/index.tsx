import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './SignIn';

const Auth = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<SignIn />} />
      <Route path={'/in'} element={<SignIn />} />
    </Routes>
  );
};

export default Auth;
