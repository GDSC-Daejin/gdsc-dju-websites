import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardElementWrapper = styled(motion.div)`
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 25%;
  }

  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 33%;
  }

  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 50%;
  }
`;

export const CardList = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
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
