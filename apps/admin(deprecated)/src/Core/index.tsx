import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';

import Alert from '@common/Alert';
import Error from '@pages/Error';
import Redirect from '@pages/Redirect';
import SignIn from '@pages/SignIn';
import Pages from '@src/pages';
import CheckAdminUser from '@utils/CheckAdminUser';

import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';

const Core = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        {/*<CheckAdminUser />*/}
        <Alert />
        <Routes>
          {/*<Route path={'/'} element={<SignIn />} />*/}
          <Route path={'/redirect'} element={<Redirect />} />
          <Route path={'/certified/*'} element={<Pages />} />
          <Route path={'*'} element={<Error />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Core;
