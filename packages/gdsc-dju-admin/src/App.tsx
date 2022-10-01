import { GdsThemeProvider, Navigation } from '@gdsc-dju/styled-components';
import React from 'react';

import { GoogleSpinner } from './components/Lottie/GoogleSpinner';

import Layout from './Core';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <GoogleSpinner background={true} />
      <Layout />
    </GdsThemeProvider>
  );
}

export default App;
