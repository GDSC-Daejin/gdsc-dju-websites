import styled from 'styled-components';
import { HomeSectionWrapper } from '../../components/HomeSection/styled';

export const HomeContainer = styled.div`
  overflow-x: hidden;
  position: relative;
  scroll-behavior: smooth;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  @media (max-width: 1040px) {
    scroll-snap-type: none;
    height: auto;
  }

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
  & > div {
    scroll-snap-align: start;
  }
`;

export const HomeSolarSystemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20%;
  top: 20%;
  z-index: -1;
  transform: translate(0%, -50%);
  @media (max-width: 500px) {
    left: 100%;
    top: 10%;
    transform: scale(0.6, 0.6);
  }
`;
