import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/common/Navigation';

import Routes from '../Routes/Routes';

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default Layout;
