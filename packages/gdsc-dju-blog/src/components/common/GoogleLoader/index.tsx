import React, { useEffect, useRef } from 'react';
import { GoogleIcon, LoaderBackground } from './styled';
import lottie from 'lottie-web';
import animation from './GoogleAnimation.json';

const GoogleLoader = (props: { background?: boolean }) => {
  const { background } = props;
  const googleContainer = useRef<HTMLDivElement>(null);

  const loaderAnimation = {
    start: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
    end: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        delay: 0.5,
      },
    },
  };
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: googleContainer.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animation,
      }),
    [],
  );
  return (
    <LoaderBackground
      background={background}
      variants={loaderAnimation}
      initial={'start'}
      animate={'end'}
      exit={'exit'}
    >
      <GoogleIcon ref={googleContainer} />
    </LoaderBackground>
  );
};

export default GoogleLoader;
