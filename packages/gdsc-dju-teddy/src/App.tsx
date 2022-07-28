import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './Layout';
import Error from './pages/Error';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Layout />
    </ErrorBoundary>
  );
}

export default App;
