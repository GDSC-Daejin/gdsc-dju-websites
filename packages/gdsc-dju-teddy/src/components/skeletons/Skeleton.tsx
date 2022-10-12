import React from 'react';

import styled, { css } from 'styled-components';

type SkeletonInnerProps = {
  width: string;
  height: string;
  radius: string;
};
const SkeletonInner = styled.div<SkeletonInnerProps>`
  ${({ width, height, radius }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${radius};
  `};

  animation: react-loading-skeleton 1s linear infinite alternate;
  @keyframes react-loading-skeleton {
    0% {
      background: hsl(200, 20%, 70%);
    }
    100% {
      background: hsl(200, 20%, 90%);
    }
  }
`;

const Skeleton = ({
  width = '200px',
  height = '200px',
  radius = '10px',
}: SkeletonInnerProps) => {
  return <SkeletonInner width={width} radius={radius} height={height} />;
};

export default Skeleton;
