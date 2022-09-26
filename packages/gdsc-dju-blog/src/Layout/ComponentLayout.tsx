import ThemeButton from '@assets/icons/ThemeButton';
import {
  DarkModeContext,
  Footer,
  MenuContext,
  Navigation,
} from '@gdsc-dju/styled-components';
import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';

import Modal from '@src/components/molecules/modal';
import NavigationElementBox from '@src/components/molecules/NavigationElementBox';

import SideMenu from '@src/components/organisms/SideMenu';
import { siteLinks } from '@src/contents/siteLinks';
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
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
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
      <ThemeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Footer pages={siteLinks} />
    </>
  );
};

export default ComponentLayout;
