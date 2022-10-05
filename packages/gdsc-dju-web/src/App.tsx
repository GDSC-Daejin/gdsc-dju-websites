import { GdsThemeProvider } from '@gdsc-dju/styled-components-theme';

import React from 'react';

import Layout from './core';
import ElementLayoutBox from './core/ElementLayoutBox';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <ElementLayoutBox>
        <Layout />
      </ElementLayoutBox>
    </GdsThemeProvider>
  );
}

export default App;
