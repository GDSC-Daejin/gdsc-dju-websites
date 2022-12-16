import React, { useEffect, useRef } from 'react';

import lottie from 'lottie-web';

import { CheckLottieWrapper } from './styled';

const CheckLottie = () => {
  const checkRef = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: checkRef.current as Element,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./CheckLottie.json'),
      }),
    [],
  );
  return (
    <>
      <CheckLottieWrapper ref={checkRef} />
    </>
  );
};

export default CheckLottie;
