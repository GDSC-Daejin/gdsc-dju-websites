import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRecoilState } from 'recoil';
import Alert from '../components/common/Alert';
import GoogleLoader from '../components/common/GoogleLoader';
import Modal from '../components/common/modal';
import Navigation from '../components/common/Navigation';
import SideBar from '../components/common/SideBar';
import { loaderState } from '../store/loader';
import GlobalStyles from '../styles/globalStyles';
import { NavigationBlock } from '../styles/layouts';

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
