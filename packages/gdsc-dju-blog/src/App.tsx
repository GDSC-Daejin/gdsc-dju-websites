import { DarkModeContext, GdsThemeProvider } from '@gdsc-dju/styled-components';
import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ThemeButton from './assets/icons/ThemeButton';
import Layout from './Layout';
import ErrorFallback from './pages/ErrorFallback';

function App() {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <GdsThemeProvider mode={'auto'}>
        <Layout />
        <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </GdsThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
