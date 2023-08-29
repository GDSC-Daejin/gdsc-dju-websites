import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
// import { AtomDevtools } from './store/JotaiDevTool';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 auto',
            minHeight: '100vh',
          }}
        >
          <App />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
