import { MenuContext, Navigation } from '@gdsc-dju/styled-components';
import NavigationElement from '@layout/NavigationElement';
import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import SideMenu from '../components/layout/SideMenu';

import AdminApplicants from './Applicants';
import Email from './Email';
import AdminEmailLog from './EmailLog';
import Home from './Home';
import { AdminContainer, AdminContainerWrapper } from './styled';

const Pages = () => {
  const { isMenuOpen, toggleMenu, menuHandler } = useContext(MenuContext);

  return (
    <>
      <Navigation
        menuPosition={'right'}
        sideMenu={<SideMenu />}
        isMenuOpen={isMenuOpen}
        menuToggle={toggleMenu}
        menuHandler={menuHandler}
        rightElement={<NavigationElement />}
      />
      <AdminContainerWrapper>
        <SideMenu />
        <AdminContainer>
          <Routes>
            <Route path={'/*'} element={<Home />} />
            <Route path={'/recruit/*'} element={<AdminApplicants />} />
            <Route path={'/recruit/:userid'} element={<AdminApplicants />} />
            <Route path={'/email'} element={<Email />} />
            <Route path={'/email-log'} element={<AdminEmailLog />} />
          </Routes>
        </AdminContainer>
      </AdminContainerWrapper>
    </>
  );
};

export default Pages;
