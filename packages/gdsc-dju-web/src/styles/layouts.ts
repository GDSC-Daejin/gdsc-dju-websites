import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TopMargin = styled.div`
  height: 50px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
  width: 92%;
  height: 100%;
  max-width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 20px;
`;
export const CardList = styled(motion.section)`
  display: grid;
  flex-wrap: wrap;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
