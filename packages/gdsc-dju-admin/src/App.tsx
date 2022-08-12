import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import React from 'react';

import { GoogleSpinner } from './components/Lottie/GoogleSpinner';
import Navigation from './components/molecules/Navigation';

import Layout from './Layout';
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
