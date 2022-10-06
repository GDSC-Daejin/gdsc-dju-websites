import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DarkModeContext, Navigation } from '@gdsc-dju/styled-components';

import CustomLogo from '../components/common/CustomLogo';
import NavigationElement from '../components/common/NavigationElement';
import Home from '../pages/Home';
import Weekly from '../pages/Weekly';

const Layout = () => {
  const { toggleTheme } = useContext(DarkModeContext);

  return (
    <>
      <Navigation
        customLogo={<CustomLogo />}
        title={'teddy'}
        pointColor={'orange600'}
        menuToggle={toggleTheme}
        menuPosition={'none'}
        rightElement={<NavigationElement />}
      />

      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/weekly/*'} element={<Weekly />} />
      </Routes>
    </>
  );
};

export default Layout;
