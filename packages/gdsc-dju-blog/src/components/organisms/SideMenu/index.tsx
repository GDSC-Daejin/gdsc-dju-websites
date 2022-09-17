import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';

import {
  GrayBox,
  SideMenuInner,
  SideMenuSectionWrapper,
  SideMenuWrapper,
} from './styled';
import { MENU_KEY, menuState } from '@src/store/menu';
import {
  SideMenuAnimation,
  SideMenuGrayBoxAnimation,
} from '@src/components/Animation';
import TokenService from '@src/api/TokenService';
import SideMenuLogin from './SideMenuLogin';
import SideMenuLogout from './SideMenuLogout';
import SideMenuCategory from './SideMenuCategory';

export const SideMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [cookies] = useCookies(['token', 'user']);
  const isLogin = cookies.token;

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!menu.appMenu) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [menu]);

  return (
    <>
      <SideMenuWrapper
        initial={false}
        variants={SideMenuAnimation}
        animate={menu.appMenu ? 'isActive' : 'isUnActive'}
      >
        <SideMenuInner>
          <SideMenuSectionWrapper>
            {isLogin ? (
              <SideMenuLogin
                closeSideMenu={() =>
                  setMenu({ ...menu, [MENU_KEY.APP_MENU]: false })
                }
              />
            ) : (
              <SideMenuLogout loginURL={TokenService.getRedirectURL()} />
            )}
            <SideMenuCategory />
          </SideMenuSectionWrapper>
        </SideMenuInner>
      </SideMenuWrapper>
      <AnimatePresence>
        {menu.appMenu && (
          <GrayBox
            variants={SideMenuGrayBoxAnimation}
            animate={'isActive'}
            exit={'isUnActive'}
            onClick={() => {
              setMenu({ ...menu, [MENU_KEY.APP_MENU]: false });
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SideMenu;
