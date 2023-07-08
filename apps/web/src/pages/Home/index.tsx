import React, { lazy } from 'react';

import SolarSystem from '@common/SolarSystem';

import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const HomePageSection = lazy(() =>
  import('@src/components/layouts/HomeLayout/HomePageSection').then(
    (module) => ({
      default: module.default,
    }),
  ),
);

const IntroduceSection = lazy(() =>
  import('@src/components/layouts/HomeLayout/IntroduceSection').then(
    (module) => ({
      default: module.default,
    }),
  ),
);
const CultureSection = lazy(() =>
  import('@src/components/layouts/HomeLayout/CultureSection').then(
    (module) => ({
      default: module.default,
    }),
  ),
);
const ManagementSection = lazy(() =>
  import('@src/components/layouts/HomeLayout/ManagementSection').then(
    (module) => ({
      default: module.default,
    }),
  ),
);

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
