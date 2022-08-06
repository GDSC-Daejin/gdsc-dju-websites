import React from 'react';
import { Footer } from '../../components/common/Footer';
import HomePage from '../../components/HomeSection/HomePage';
import CultureSection from '../../components/HomeSection/CultureSection';
import IntroduceSection from '../../components/HomeSection/IntroduceSection';
import ManagementSection from '../../components/HomeSection/ManagementSection';
import SolarSystem from '../../components/SolarSystem';
import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <HomePage />
      <IntroduceSection />
      <CultureSection />
      <ManagementSection />
      <Footer />
    </HomeContainer>
  );
};
export default Home;
