import { motion } from 'framer-motion';
import styled from 'styled-components';
export const OnboardSectionContainer = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: center;
  white-space: nowrap;
  min-width: 900px;
  width: fit-content;
  flex-direction: column;
  position: relative;
`;
export const OnboardContainerWrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
