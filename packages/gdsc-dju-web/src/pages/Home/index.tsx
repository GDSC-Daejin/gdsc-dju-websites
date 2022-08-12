import React from 'react';
import { Footer } from '@layout/Footer';
import CultureSection from '@layout/Home/CultureSection';
import HomePageSection from '@layout/Home/HomePageSection';
import IntroduceSection from '@layout/Home/IntroduceSection';
import ManagementSection from '@layout/Home/ManagementSection';
import SolarSystem from '@layout/SolarSystem';

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
      <Footer />
    </HomeContainer>
  );
};
export default Home;
