import { MenuContext } from '@gdsc-dju/styled-components';
import TokenService from '@src/api/TokenService';
import { SideMenuAnimation } from '@src/components/Animation';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import SideMenuCategory from './SideMenuCategory';
import SideMenuLogin from './SideMenuLogin';
import SideMenuLogout from './SideMenuLogout';

import {
  SideMenuInner,
  SideMenuSectionWrapper,
  SideMenuWrapper,
} from './styled';

export const SideMenu = () => {
  const [cookies] = useCookies(['token', 'user']);
  const { isMenuOpen, toggleMenu } = React.useContext(MenuContext);
  const isLogin = cookies.token;

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!isMenuOpen) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isMenuOpen]);

  return (
    <>
      <SideMenuWrapper
        initial={false}
        variants={SideMenuAnimation}
        animate={isMenuOpen ? 'isActive' : 'isUnActive'}
      >
        <SideMenuInner>
          <SideMenuSectionWrapper>
            {isLogin ? (
              <SideMenuLogin closeSideMenu={toggleMenu} />
            ) : (
              <SideMenuLogout loginURL={TokenService.getRedirectURL()} />
            )}
            <SideMenuCategory />
          </SideMenuSectionWrapper>
        </SideMenuInner>
      </SideMenuWrapper>
    </>
  );
};

export default SideMenu;