import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/common/Footer';
import ReactHelmet from '../../components/common/ReactHelmet';
import SectionCulture from '../../components/Home/SectionCulture';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionManager from '../../components/Home/SectionManager';
import SolarSystem from '../../components/Home/SolorSystem';
import GoogleSpinner from '../../components/Lottie/GoogleSpinner';
import { HomeSolarSystemWrapper } from './styled';

const HomePageV2 = lazy(() =>
  import('../../components/Home/HomePageV2').then((module) => ({
    default: module.default,
  })),
);

const HomeContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  .container {
    scroll-behavior: smooth;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    @media (max-width: 1040px) {
      scroll-snap-type: none;
      height: auto;
    }
  }
  .container::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
  .container > div {
    scroll-snap-align: start;
  }
`;

const Home = () => {
  return (
    <>
      <ReactHelmet
        title={'GDSC DJU'}
        description={
          'Google Developer Student Clubs Daejin University 챕터입니다. '
        }
      />
      <HomeContainer>
        <Suspense fallback={<GoogleSpinner />}>
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
        </Suspense>
      </HomeContainer>
    </>
  );
};
export default Home;
