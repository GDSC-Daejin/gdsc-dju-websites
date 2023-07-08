import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardElementWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const CardList = styled(motion.section)`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
