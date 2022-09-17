import { GdsThemeProvider } from '@gdsc-dju/styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import ThemeButton from './assets/icons/ThemeButton';
import { useTheme } from './hooks/ThemeHandler';
import Layout from './Layout';
import ErrorFallback from './pages/ErrorFallback';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GdsThemeProvider mode={'auto'}>
        <Layout />
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
      </GdsThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
