import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
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
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
