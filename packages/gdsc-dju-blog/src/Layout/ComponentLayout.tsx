import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRecoilState } from 'recoil';
import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';
import { loaderState } from '@src/store/loader';
import Navigation from '@src/components/layouts/Navigation';
import Modal from '@src/components/molecules/modal';
import SideBar from '@src/components/organisms/SideBar';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);

  return (
    <div>
      <Alert />
      <Modal />
      <SideBar />
      <Navigation />
      <NavigationBlock />
      <AnimatePresence>
        {loader.loading && <GoogleLoader background={loader.background} />}
      </AnimatePresence>
      <GlobalStyles />
      {children}
    </div>
  );
};

export default ComponentLayout;
