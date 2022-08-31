import { motion } from 'framer-motion';
import styled from 'styled-components';
export const OnboardSectionContainer = styled(motion.div)`
  display: flex;
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

export const OnboardContentBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
`;
export const OnboardContentButtonWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const OnboardContentsWrapper = styled(motion.div)`
  display: flex;
  position: relative;
  gap: 21px;
  min-width: 900px;
  height: 100%;
  flex-direction: column;
  margin-top: 93px;
`;
