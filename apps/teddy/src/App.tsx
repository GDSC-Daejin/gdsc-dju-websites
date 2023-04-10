import { useInsertionEffect } from 'react';

import { themeHandler, useTheme } from '@gdsc-dju/gds-theme';

import './App.css';
import Layout from './Layout';

function App() {
  const [theme] = useTheme();

  useInsertionEffect(() => {
    themeHandler('auto');
  }, []);

  return <Layout />;
}

export default App;
