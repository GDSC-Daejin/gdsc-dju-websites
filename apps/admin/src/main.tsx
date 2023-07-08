import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import '@gdsc-dju/gds-styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
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
  </React.StrictMode>,
);
