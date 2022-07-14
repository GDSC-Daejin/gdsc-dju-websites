import { motion } from 'framer-motion';
import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';

const Planet = ({ line }: { line: number }) => {
  const delay = Math.round(Math.random() * (30 - 10) + 10);
  const randomSize = Math.round(Math.random() * (70 - 20) + 20);
  const randomStartPoint = Math.round(Math.random() * (100 - 20) + 20);
  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
  const randomColor =
    googleColors[Math.floor(Math.random() * googleColors.length)];
  return (
    <PlanetInner
      path={line}
      color={randomColor}
      size={randomSize}
      initial={{ offsetDistance: `${randomStartPoint}%` }}
      animate={{ offsetDistance: `${100 + randomStartPoint}%` }}
      transition={{
        duration: 10 + delay,
        ease: 'linear',
        repeat: Infinity,
      }}
    />
  );
};

interface PlanetInnerProps {
  path: number;
  color: string;
  size: number;
}
const PlanetInner = styled(motion.div)<PlanetInnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  position: absolute;
  background: ${({ color }) => color};
  top: 0;
  left: 0;
  ${({ path }) =>
    path === 1 &&
    css`
      offset-path: path(
        'M250 499.5C387.795 499.5 499.5 387.795 499.5 250C499.5 112.205 387.795 0.5 250 0.5C112.205 0.5 0.5 112.205 0.5 250C0.5 387.795 112.205 499.5 250 499.5Z'
      );
    `}${({ path }) =>
    path === 2 &&
    css`
      offset-path: path(
        'M493 985.5C765 985.5 985.5 765 985.5 493C985.5 221 765 0.5 493 0.5C221 0.5 0.5 221 0.5 493C0.5 765 221 985.5 493 985.5Z'
      );
    `}${({ path }) =>
    path === 3 &&
    css`
      offset-path: path(
        'M621.5 1242.5C964.469 1242.5 1242.5 964.469 1242.5 621.5C1242.5 278.531 964.469 0.5 621.5 0.5C278.531 0.5 0.5 278.531 0.5 621.5C0.5 964.469 278.531 1242.5 621.5 1242.5Z'
      );
    `}
`;

export default memo(Planet);
