import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import DownArrowIcon from '../../../assets/icons/DownArrowIcon';

const DownArrowWrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5%;
`;

const DownArrow = () => {
  return (
    <DownArrowWrapper
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
    </DownArrowWrapper>
  );
};

export default DownArrow;
