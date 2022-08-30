import { GdsThemeProvider } from '@gdsc-dju/styled-components';

import React from 'react';

import Layout from './Layout';
import ElementLayoutBox from './Layout/ElementLayoutBox';
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
