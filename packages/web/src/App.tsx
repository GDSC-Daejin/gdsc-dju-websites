import { useLayoutEffect, useState } from 'react';

import { themeHandler, useTheme } from '../../theme/src';
import { Navigation, Footer } from '../../ui/src';

import Routes from './Routes';
import GlobalStyles from './styles/globalStyles';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme] = useTheme();

  useLayoutEffect(() => {
    themeHandler('auto');
  }, []);

  return (
    <>
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        menuButton={'left'}
      />
      <GlobalStyles />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
