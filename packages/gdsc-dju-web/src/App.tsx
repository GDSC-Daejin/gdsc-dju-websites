import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import Navigation from '@layout/Navigation';

import React from 'react';

import Layout from './Layout';
import ElementLayoutBox from './Layout/ElementLayoutBox';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <Navigation />
      <ElementLayoutBox>
        <Layout />
      </ElementLayoutBox>
    </GdsThemeProvider>
  );
}

export default App;
