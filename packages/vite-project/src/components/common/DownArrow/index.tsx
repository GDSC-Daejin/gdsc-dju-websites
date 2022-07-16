import React from 'react';
import { DownArrowWrapper } from '../../../pages/Home/styled';
import DownArrowIcon from '../../../assets/DownArrow';

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
