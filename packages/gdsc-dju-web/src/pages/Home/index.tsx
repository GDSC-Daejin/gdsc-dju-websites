import React, { lazy } from 'react';
import { Footer } from '../../components/common/Footer';
import ReactHelmet from '../../components/common/ReactHelmet';
import HomePageV2 from '../../components/Home/HomePageV2';
import SectionCulture from '../../components/Home/SectionCulture';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionManager from '../../components/Home/SectionManager';
import SolarSystem from '../../components/Home/SolorSystem';
import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const Home = () => {
  return (
    <HomeContainer>
      <ReactHelmet
        title={'GDSC DJU'}
        description={
          'Google Developer Student Clubs Daejin University 챕터입니다. '
        }
      />
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
    </HomeContainer>
  );
};
export default Home;
