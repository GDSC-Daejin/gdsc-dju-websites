import React from 'react';

import SolarSystem from '../../components/molecules/SolarSystem';
import { Footer } from '../../components/organisms/Footer';
import CultureOrganism from '../../components/organisms/Home/CultureOrganism';
import HomePageOrganism from '../../components/organisms/Home/HomePageOrganism';
import IntroduceOrganism from '../../components/organisms/Home/IntroduceOrganism';
import ManagementOrganism from '../../components/organisms/Home/ManagementOrganism';

import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <HomePageOrganism />
      <IntroduceOrganism />
      <CultureOrganism />
      <ManagementOrganism />
      <Footer />
    </HomeContainer>
  );
};
export default Home;
