import React from 'react';
import { Footer } from '../components/common/Footer';
import HomePageV2 from '../components/Home/HomePageV2';
import SectionCulture from '../components/Home/SectionCulture';
import SectionIntroduce from '../components/Home/SectionIntroduce';
import SectionManager from '../components/Home/SectionManager';
import SolarSystem from '../components/SolarSystem';
import { HomeSolarSystemWrapper } from '../pages/Home/styled';

const HomeLayout = () => {
  return (
    <div className={'container'}>
      <HomeSolarSystemWrapper>
        <SolarSystem />
      </HomeSolarSystemWrapper>
      <HomePageV2 />
      <SectionIntroduce />
      <SectionCulture />
      <SectionManager />
      <Footer />
    </div>
  );
};

export default HomeLayout;
