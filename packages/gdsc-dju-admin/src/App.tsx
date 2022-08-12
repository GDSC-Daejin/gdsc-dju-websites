import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import React from 'react';
import Navigation from './components/layout/Navigation';

import { GoogleSpinner } from './components/Lottie/GoogleSpinner';

import Layout from './Core';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <GoogleSpinner background={true} />
      <Navigation />
      <Layout />
    </GdsThemeProvider>
  );
}

export default App;
