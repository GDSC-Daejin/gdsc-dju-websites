import React from 'react';

import SolarSystem from '../components/common/SolarSystem';
import CultureSection from '../components/home/CultureSection';
import HomePageSection from '../components/home/HomePageSection';
import IntroduceSection from '../components/home/IntroduceSection';
import ManagementSection from '../components/home/ManagementSection';

import { HomeContainer, HomeSolarSystemWrapper } from './Home.styled';

const HomeLayout = () => {
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

export default HomeLayout;
