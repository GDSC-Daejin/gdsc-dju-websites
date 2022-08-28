import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';

import Modal from '@src/components/molecules/modal';
import Footer from '@src/components/organisms/Footer';
import Navigation from '@src/components/organisms/Navigation';
import SideBar from '@src/components/organisms/SideMenu';
import { loaderState } from '@src/store/loader';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useRecoilState } from 'recoil';

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
      <Footer />
    </div>
  );
};

export default ComponentLayout;
