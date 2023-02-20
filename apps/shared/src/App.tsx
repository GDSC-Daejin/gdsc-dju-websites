import React, { useLayoutEffect } from 'react';

import { changeTheme, themeHandler, useTheme } from '@gdsc-dju/gds-theme';

import { ThemeProvider } from 'styled-components';

import { Footer } from './components/Footer';
import Navigation from './components/Navigation';
import { ThemeType } from './hooks/ThemeHandler';
import Layout from './layout';
import GlobalStyles from './styles/globalStyles';
import { StyledBody } from './styles/layouts';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const [theme] = useTheme();

  useLayoutEffect(() => {
    themeHandler('auto');
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme as ThemeType} toggleTheme={changeTheme} />
      <StyledBody>
        <Layout />
      </StyledBody>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
