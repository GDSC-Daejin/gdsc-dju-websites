import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import errorAnimation from './ErrorLottie.json';

const ErrorLottie = () => {
  const errorRef = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: errorRef.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: errorAnimation,
      }),
    [],
  );
  return <div ref={errorRef} />;
};

export default ErrorLottie;
