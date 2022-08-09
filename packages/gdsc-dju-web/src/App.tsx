import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import React from 'react';
import Navigation from './components/organisms/navigation/DeskNavigation';

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
