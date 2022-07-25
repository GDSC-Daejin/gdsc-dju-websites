import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/common/Navigation';
import { GoogleSpinner } from './components/Lottie/GoogleSpinner';
import { useTheme } from './hooks/useTheme';
import Layout from './Layout';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <GoogleSpinner background={true} />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
