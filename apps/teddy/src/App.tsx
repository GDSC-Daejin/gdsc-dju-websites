import { useInsertionEffect } from 'react';

import { themeHandler, useTheme } from '@gdsc-dju/gds-theme';

import Layout from './Layout';

function App() {
  // 스타일 관련 scss or styled-components
  // 상태관리 jotai
  // 서버상태관리 React query
  const [theme] = useTheme();

  useInsertionEffect(() => {
    themeHandler('auto');
  }, []);

  return <Layout />;
}

export default App;
