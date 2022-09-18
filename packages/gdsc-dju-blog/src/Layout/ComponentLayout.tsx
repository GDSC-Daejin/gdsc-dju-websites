import { MenuContext, Navigation } from '@gdsc-dju/styled-components';
import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';

import Modal from '@src/components/molecules/modal';
import NavigationElementBox from '@src/components/molecules/NavigationElementBox';
import Footer from '@src/components/organisms/Footer';
import SideMenu from '@src/components/organisms/SideMenu';
import { loaderState } from '@src/store/loader';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';
import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);
  const { isMenuOpen, toggleMenu, menuHandler } = useContext(MenuContext);

  return (
    <div>
      <Alert />
      <Modal />
      <Navigation
        isMenuOpen={isMenuOpen}
        themeButtonActive={false}
        menuToggle={toggleMenu}
        title={'Tech Blog'}
        menuPosition={'left'}
        sideMenu={<SideMenu />}
        menuHandler={menuHandler}
        rightElement={<NavigationElementBox />}
      />
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
