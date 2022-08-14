import React from 'react';

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div style={{ fontSize: '2.6rem' }}>
      <p style={{ fontSize: '2.6rem' }}>Something went wrong:</p>
      <pre style={{ fontSize: '2.6rem' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
