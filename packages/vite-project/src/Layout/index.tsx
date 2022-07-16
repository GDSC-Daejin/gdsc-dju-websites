import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';
import Pages from '../pages';
import Auth from '../pages/Auth';
import Error from '../pages/Error';
import Admin from '../pages/Admin';

const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinner />}>
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
