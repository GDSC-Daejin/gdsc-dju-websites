import { useAtom } from 'jotai';
import React, { Suspense, lazy, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router';
import ScrollTop from '../components/common/ScrollTop';
import { GoogleSpinnerStatic } from '../components/Lottie/GoogleSpinner';
import Error from '../pages/Error';
import { asyncGetRecruitmentStatusAtom } from '../store/recruitmentStatusAtom';

const Home = lazy(() =>
  import('../pages/Home').then((module) => ({
    default: module.default,
  })),
);
const Recruit = lazy(() =>
  import('../pages/Recruit').then((module) => ({
    default: module.default,
  })),
);
const Introduce = lazy(() =>
  import('../pages/Introduce').then((module) => ({
    default: module.default,
  })),
);

const Faq = lazy(() =>
  import('../pages/Faq').then((module) => ({
    default: module.default,
  })),
);
const Layout = () => {
  const [, getRecruitment] = useAtom(asyncGetRecruitmentStatusAtom);
  useEffect(() => {
    getRecruitment();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<GoogleSpinnerStatic />}>
        <ScrollTop />
        <Routes>
          <Route path={'/*'} element={<Home />} />
          <Route path={'/introduce'} element={<Introduce />} />
          <Route path={'/recruit/*'} element={<Recruit />} />
          <Route path={'/faq/*'} element={<Faq />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Layout;
