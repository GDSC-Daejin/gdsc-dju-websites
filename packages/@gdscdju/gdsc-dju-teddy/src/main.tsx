import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import App from './App';
import GlobalStyles from './styles/globalStyles';
import { lightTheme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <SWRConfig>
          <App />
        </SWRConfig>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
