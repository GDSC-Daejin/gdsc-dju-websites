import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Alert from './components/common/Alert';
import { Footer } from './components/common/Footer';
import Modal from './components/common/Modal';
import Navigation from './components/common/navigation/DeskNavigation';
import GoogleSpinner from './components/Lottie/GoogleSpinner';
import { useTheme } from './hooks/useTheme';

import Layout from './Layout';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const [footer, setFooter] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === '/' ? setFooter(false) : setFooter(true);
  }, [location.pathname]);
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Alert />
      <GoogleSpinner background={true} />
      <Modal />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Layout />
      {footer && <Footer />}
    </ThemeProvider>
  );
}

export default App;
