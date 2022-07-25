import React from 'react';
import { Footer } from '../components/common/Footer';
import HomePage from '../components/HomeSection/HomePage';
import SectionCulture from '../components/HomeSection/SectionCulture';
import SectionIntroduce from '../components/HomeSection/SectionIntroduce';
import SectionManager from '../components/HomeSection/SectionManager';
import SolarSystem from '../components/SolarSystem';
import { HomeSolarSystemWrapper } from './home.styled';

const HomeLayout = () => {
  return (
    <div className={'container'}>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <HomePage />
      <SectionIntroduce />
      <SectionCulture />
      <SectionManager />
      <Footer />
    </div>
  );
};

export default HomeLayout;
