import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';

const Pages = lazy(() =>
  import('../pages').then((module) => ({
    default: module.default,
  })),
);
const Admin = lazy(() =>
  import('../pages/Admin').then((module) => ({
    default: module.default,
  })),
);
const Auth = lazy(() =>
  import('../pages/Auth').then((module) => ({
    default: module.default,
  })),
);
const Error = lazy(() =>
  import('../pages/Error').then((module) => ({
    default: module.default,
  })),
);
const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        <Routes>
          <Route path={'/*'} element={<Pages />} />
          <Route path={'/admin/*'} element={<Admin />} />
          <Route path={'/auth/*'} element={<Auth />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
