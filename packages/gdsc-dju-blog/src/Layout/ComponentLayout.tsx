import Alert from '@src/components/atoms/Alert';
import GoogleLoader from '@src/components/atoms/GoogleLoader';
import SearchInput from '@src/components/atoms/input/SearchInput';

import Modal from '@src/components/molecules/modal';
import Footer from '@src/components/organisms/Footer';
import { MenuContext, Navigation } from '@gdsc-dju/styled-components';
import SideBar from '@src/components/organisms/SideMenu';
import { loaderState } from '@src/store/loader';
import GlobalStyles from '@styles/globalStyles';
import { NavigationBlock } from '@styles/layouts';
import { AnimatePresence } from 'framer-motion';
import React, { useContext, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const ComponentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loader] = useRecoilState(loaderState);
  const { isMenuOpen, toggleMenu, menuHandler } = useContext(MenuContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!inputRef.current) return;

    if (inputRef.current.value.trim() !== '')
      navigate(`/search/${inputRef.current.value}?type=all&page=1`);
  };
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
        sideMenu={<SideBar />}
        menuHandler={menuHandler}
        rightElement={<SearchInput onClick={handleSubmit} ref={inputRef} />}
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
