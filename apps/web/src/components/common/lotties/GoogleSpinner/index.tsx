import React, { useEffect, useRef } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import lottie from 'lottie-web';

import { loaderAtom } from '@src/store/loaderAtom';

import googleAnimation from './GoogleAnimation.json';
import { GoogleLoader, LoaderBackground } from './styled';

const GoogleSpinner = (props: { background?: boolean }) => {
  const { background } = props;
  const googleContainer = useRef<HTMLDivElement>(null);
  const [loading] = useAtom(loaderAtom);

  useEffect(
    () =>
      void lottie.loadAnimation({
        container: googleContainer.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: googleAnimation,
      }),
    [loading],
  );
  return (
    <AnimatePresence>
      {loading && (
        <LoaderBackground
          background={background}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <GoogleLoader
            ref={googleContainer}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        </LoaderBackground>
      )}
    </AnimatePresence>
  );
};
const GoogleSpinnerStatic = (props: { background?: boolean }) => {
  const { background } = props;
  const googleContainer = useRef<HTMLDivElement>(null);
  const [loading] = useAtom(loaderAtom);

  useEffect(
    () =>
      void lottie.loadAnimation({
        container: googleContainer.current as Element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: googleAnimation,
      }),
    [loading],
  );

  return (
    <LoaderBackground
      background={background}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <GoogleLoader
        ref={googleContainer}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </LoaderBackground>
  );
};

export { GoogleSpinner, GoogleSpinnerStatic };
