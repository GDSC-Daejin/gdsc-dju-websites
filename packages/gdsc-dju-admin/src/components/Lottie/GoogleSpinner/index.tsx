import { useAtom } from 'jotai';
import React, { useEffect, useRef } from 'react';
import { loaderAtom } from '../../../store/loaderAtom';
import { GoogleLoader, LoaderBackground } from './styled';
import lottie from 'lottie-web';
import googleAnimation from './GoogleAnimation.json';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

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
    [loading.isLoading],
  );
  return (
    <AnimatePresence>
      {loading.isLoading && (
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
    [loading.isLoading],
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
