import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import Alert from '../components/Alert';

import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';

import Admin from '../pages';
import Error from '../pages/Error';
import Redirect from '../pages/Redirect';
import SignIn from '../pages/SignIn';
import CheckAdminUser from '../utils/CheckAdminUser';

const Core = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        <CheckAdminUser />
        <Alert />
        <Routes>
          <Route path={'/'} element={<SignIn />} />
          <Route path={'/redirect'} element={<Redirect />} />
          <Route path={'/certified/*'} element={<Admin />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Core;
