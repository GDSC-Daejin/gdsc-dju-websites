import React, { lazy } from 'react';
import { Footer } from '../../components/common/Footer';
import ReactHelmet from '../../components/common/ReactHelmet';
import SectionCulture from '../../components/Home/SectionCulture';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionManager from '../../components/Home/SectionManager';
import SolarSystem from '../../components/Home/SolorSystem';
import { HomeContainer, HomeSolarSystemWrapper } from './styled';

const HomePageV2 = lazy(() =>
  import('../../components/Home/HomePageV2').then((module) => ({
    default: module.default,
  })),
);

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
