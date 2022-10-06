import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import crown from '../../assets/crown.svg';

export const CrownWrapper = styled(motion.div)`
  position: absolute;
  left: -2px;
  top: -14px;
`;
export const StyledGradeCrown = styled.img`
  width: 30px;
`;
const listItem = {
  start: { opacity: 0, rotate: 90, scale: 0.7, y: -30 },
  end: {
    opacity: 1,
    rotate: -30,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      opacity: { delay: 0.5 },
      rotate: { delay: 0.5 },
      scale: { delay: 0.3 },
    },
  },
};

const GradeCrown = () => {
  return (
    <CrownWrapper variants={listItem}>
      <StyledGradeCrown src={crown} alt={'crown-icon'} />
    </CrownWrapper>
  );
};

export default GradeCrown;
