import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import Navigation from './components/Navigation';
import { useTheme } from './hooks/ThemeHandler';
import Layout from './layout';
import GlobalStyles from './styles/globalStyles';
import { StyledBody } from './styles/layouts';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <StyledBody>
        <Layout />
      </StyledBody>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
