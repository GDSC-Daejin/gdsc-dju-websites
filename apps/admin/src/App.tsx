import { useInsertionEffect } from 'react';

import { themeHandler, useTheme } from '@gdsc-dju/gds-theme';

import Router from './routes/Routes';

function App() {
  const [theme] = useTheme();

  useInsertionEffect(() => {
    themeHandler('auto');
  }, []);

  return <Router />;
}

export default App;
