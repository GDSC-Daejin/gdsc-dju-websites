import React, { useEffect, useRef } from 'react';
import { GoogleLoader, LoaderBackground } from './styled';
import lottie from 'lottie-web';
import googleAnimation from './GoogleAnimation.json';

const GoogleSpinner = (props: { background?: boolean }) => {
  const { background } = props;
  const googleContainer = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      void lottie.loadAnimation({
        container: googleContainer.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: googleAnimation,
      }),
    [],
  );
  return (
    <LoaderBackground background={background}>
      <GoogleLoader ref={googleContainer} />
    </LoaderBackground>
  );
};

export default GoogleSpinner;
