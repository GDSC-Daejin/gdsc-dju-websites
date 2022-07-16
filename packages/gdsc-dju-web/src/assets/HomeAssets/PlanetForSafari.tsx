import { memo } from 'react';
import React from 'react';

const PlanetForSafari = ({ line }: { line: number }) => {
  const delay = Math.round(Math.random() * (30 - 10) + 10);
  const randomSize = Math.round(Math.random() * (60 - 20) + 20);
  const randomPosition = Math.round(Math.random() * 360);
  const googleColors = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];
  const randomColor =
    googleColors[Math.floor(Math.random() * googleColors.length)];
  const path = {
    1: 'M250 499.5C387.795 499.5 499.5 387.795 499.5 250C499.5 112.205 387.795 0.5 250 0.5C112.205 0.5 0.5 112.205 0.5 250C0.5 387.795 112.205 499.5 250 499.5Z',
    2: 'M493 985.5C765 985.5 985.5 765 985.5 493C 985.5 221 765 0.5 493 0.5C221 0.5 0.5 221 0.5 493C0.5 765 221 985.5 493 985.5Z',
    3: 'M621.5 1242.5C964.469 1242.5 1242.5 964.469 1242.5 621.5C1242.5 278.531 964.469 0.5 621.5 0.5C278.531 0.5 0.5 278.531 0.5 621.5C0.5 964.469 278.531 1242.5 621.5 1242.5Z',
  };
  return (
    <circle r={randomSize} fill={randomColor}>
      <animateMotion
        dur={`${delay}s`}
        repeatCount="indefinite"
        path={path[line as keyof typeof path]}
        from={`${randomPosition} ${randomPosition}`}
        to={`${randomPosition + 360} ${randomPosition + 360}`}
      />
    </circle>
  );
};

export default memo(PlanetForSafari);
