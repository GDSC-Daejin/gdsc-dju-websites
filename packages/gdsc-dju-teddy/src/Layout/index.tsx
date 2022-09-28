import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { DarkModeContext, Navigation } from '@gdsc-dju/styled-components';
import NavFilterCategory from '../components/common/Navigation/NavFilterCategory';
import NavRouteCategory from '../components/common/Navigation/NavRouteCategory';
import { NavTaskWrapper } from '../components/common/Navigation/styled';
import Home from '../pages/Home';
import Weekly from '../pages/Weekly';

const Layout = () => {
  const [filter, setFilter] = useState<string>('to');
  const location = useLocation();
  const routeData = [
    { label: 'Monthly', route: '/' },
    { label: 'Weekly', route: '/weekly' },
  ];
  const filterData = [
    { label: 'To', route: 'to' },
    { label: 'From', route: 'from' },
  ];
  const [route, setRoute] = useState<string>('/');
  useEffect(() => {
    setRoute(location.pathname);
  }, [filter, route]);
  const { toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <Navigation
        title={'teddy'}
        pointColor={'orange600'}
        menuToggle={toggleTheme}
        menuPosition={'none'}
        rightElement={
          <NavTaskWrapper>
            <NavFilterCategory
              filterData={filterData}
              setFilter={setFilter}
              filter={filter}
            />
            <NavRouteCategory
              routeData={routeData}
              setSelect={setRoute}
              select={route}
            />
          </NavTaskWrapper>
        }
      />

      <Routes>
        <Route path={'/*'} element={<Home filter={filter} />} />
        <Route path={'/weekly/*'} element={<Weekly filter={filter} />} />
      </Routes>
    </>
  );
};

export default Layout;
