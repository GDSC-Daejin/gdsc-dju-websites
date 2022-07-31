import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/common/navigation/DeskNavigation';
import { useTheme } from './hooks/useTheme';
import Layout from './Layout';
import ElementLayoutBox from './Layout/ElementLayoutBox';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <ElementLayoutBox>
        <Layout />
      </ElementLayoutBox>
    </ThemeProvider>
  );
}

export default App;
