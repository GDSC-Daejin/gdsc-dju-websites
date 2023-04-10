import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../Routes/Routes';

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Layout;
