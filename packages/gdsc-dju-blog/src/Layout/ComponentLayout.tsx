import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Footer, Navigation } from '@gdsc-dju/styled-components';
import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

import { AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';

import ThemeButton from '@assets/icons/ThemeButton';
import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';
import Modal from '@src/components/molecules/modal';
import NavigationElementBox from '@src/components/molecules/NavigationElementBox';
import SideMenu from '@src/components/organisms/SideMenu';
import { siteLinks } from '@src/contents/siteLinks';
import { loaderState } from '@src/store/loader';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';
import ScrollTop from '@utils/ScrollTop';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);
  const navigate = useNavigate();

  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <>
      <Alert />
      <Modal />
      <ScrollTop />
      <Navigation
        router={navigate}
        themeButtonActive={false}
        title={'Tech Blog'}
        menuPosition={'left'}
        sideMenu={<SideMenu />}
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
