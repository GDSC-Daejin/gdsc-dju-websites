import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>,
);
