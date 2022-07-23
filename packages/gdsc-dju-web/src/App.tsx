import React from 'react';
import { ThemeProvider } from 'styled-components';
import Alert from './components/common/Alert';
import { Footer } from './components/common/Footer';
import Modal from './components/common/Modal';
import Navigation from './components/common/navigation/DeskNavigation';
import { useTheme } from './hooks/useTheme';
import Layout from './Layout';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
import { GoogleSpinner } from './components/Lottie/GoogleSpinner';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <GoogleSpinner background={true} />
      <Alert />
      <Modal />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
