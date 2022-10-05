import React, { Suspense, lazy } from 'react';
import { Footer } from '@gdsc-dju/styled-components';

import SolarSystem from '@layout/SolarSystem';

const HomePageSection = lazy(() =>
  import('@layout/Home/HomePageSection').then((module) => ({
    default: module.default,
  })),
);

const IntroduceSection = lazy(() =>
  import('@layout/Home/IntroduceSection').then((module) => ({
    default: module.default,
  })),
);
const CultureSection = lazy(() =>
  import('@layout/Home/CultureSection').then((module) => ({
    default: module.default,
  })),
);
const ManagementSection = lazy(() =>
  import('@layout/Home/ManagementSection').then((module) => ({
    default: module.default,
  })),
);

import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <HomePageSection />
      <IntroduceSection />
      <CultureSection />
      <ManagementSection />
    </HomeContainer>
  );
};
export default Home;
