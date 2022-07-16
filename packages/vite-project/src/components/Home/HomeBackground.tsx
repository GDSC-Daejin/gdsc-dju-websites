import React from 'react';
import CircleSvgMotion from '../common/CircleSvgMotion';

const HomeBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircleSvgMotion setPosition={'top: -50px; right: 400px; '} />
    </div>
  );
};

export default HomeBackground;
