import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import DownArrowIcon from '../../../assets/icons/DownArrowIcon';

const DownArrowWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  z-index: -1;
`;
const DownArrowInner = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const DownArrow = () => {
  return (
    <DownArrowWrapper>
      <DownArrowInner
        animate={{
          y: [0, 10, 0, 10, 0],
          opacity: [1, 0, 1, 0, 1],
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          times: [0, 0.3, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      >
        <DownArrowIcon />
      </DownArrowInner>
    </DownArrowWrapper>
  );
};

export default DownArrow;
