import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import CheckAdminUser from '../components/CheckAdminUser';
import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';
import Admin from '../pages';
import Error from '../pages/Error';
import Redirect from '../pages/Redirect';
import SignIn from '../pages/SignIn';

const Layout = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        <CheckAdminUser />
        <Routes>
          <Route path={'/'} element={<SignIn />} />
          <Route path={'/redirect'} element={<Redirect />} />
          <Route path={'/certified/*'} element={<Admin />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
