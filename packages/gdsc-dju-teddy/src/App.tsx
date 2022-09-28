import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './Layout';
import Error from './pages/Error';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <GdsThemeProvider mode={'auto'}>
      <GlobalStyles />
      <ErrorBoundary FallbackComponent={Error}>
        <Layout />
      </ErrorBoundary>
    </GdsThemeProvider>
  );
}

export default App;
