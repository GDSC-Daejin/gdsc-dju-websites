import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';
import Admin from '../pages/Admin';
import Error from '../pages/Error';
import SignIn from '../pages/SignIn';

const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        <Routes>
          <Route path={'/'} element={<SignIn />} />

          <Route path={'/certified'} element={<Admin />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
