import {
  GdsThemeProvider,
  MenuContext,
  Navigation,
} from '@gdsc-dju/styled-components';
import SideMenu from '@layout/SideMenu';

import React, { useContext } from 'react';

import Layout from './Layout';
import ElementLayoutBox from './Layout/ElementLayoutBox';
import GlobalStyles from './styles/globalStyles';

export const ROUTES = [
  {
    route: '/introduce',
    title: 'Introduce',
  },
  {
    route: '/recruit',
    title: 'Recruiting',
  },
  {
    route: '/faq',
    title: 'FAQ',
  },
];

function App() {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <Navigation
        menuPosition={'right-mobile-only'}
        routes={ROUTES}
        sideMenu={<SideMenu />}
        menuToggle={() => toggleMenu()}
        isMenuOpen={isMenuOpen}
        themeButtonActive={true}
        pointColor={'blue600'}
      />
      <ElementLayoutBox>
        <Layout />
      </ElementLayoutBox>
    </GdsThemeProvider>
  );
}

export default App;
