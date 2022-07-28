import React from 'react';
import styled from 'styled-components';
import HomeLayout from '../../Layout/home';

export const HomeContainer = styled.div`
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
    <HomeContainer>
      <HomeLayout />
    </HomeContainer>
  );
};
export default Home;
