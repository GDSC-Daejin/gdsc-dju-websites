import { sidebar } from '@animations/NavigationAnimation';
import { menuAtom } from '@src/store/menuAtom';
import { useAtom } from 'jotai';
import React from 'react';

import MobileMenuCategory from '../MobileMenuCategory';
import { ShortNavigation } from '../styled';
import { MobileNavBackGround } from './styled';

const MobileMenu = () => {
  const [menu, setMenu] = useAtom(menuAtom);
  return (
    <ShortNavigation initial={false} animate={menu ? 'open' : 'closed'}>
      <MobileNavBackGround variants={sidebar}>
        <MobileMenuCategory />
      </MobileNavBackGround>
    </ShortNavigation>
  );
};

export default MobileMenu;
