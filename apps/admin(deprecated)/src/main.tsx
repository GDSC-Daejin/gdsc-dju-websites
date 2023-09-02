import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

// import { AtomDevtools } from '@utils/JotaiDevTool';

import App from './App';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/*<AtomDevtools>*/}
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
        {/*</AtomDevtools>*/}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
