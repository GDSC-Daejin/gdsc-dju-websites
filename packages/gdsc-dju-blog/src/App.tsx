import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './Layout';
import ErrorFallback from './pages/ErrorFallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GdsThemeProvider mode={'auto'}>
        <Layout />
      </GdsThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
