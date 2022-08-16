import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import ThemeButton from './assets/icons/ThemeButton';
import { useTheme } from './hooks/ThemeHandler';
import Layout from './Layout';
import ErrorFallback from './pages/ErrorFallback';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Layout />
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
