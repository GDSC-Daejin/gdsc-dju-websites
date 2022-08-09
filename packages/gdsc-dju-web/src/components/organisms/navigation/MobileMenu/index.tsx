import { useAtom } from 'jotai';
import React from 'react';
import { menuAtom } from '../../../../store/menuAtom';
import { sidebar } from '../../../Variants/NavigationAnimation';

import { ShortNavigation } from '../DeskNavigation/styled';
import MobileMenuCategory from '../MobileMenuCategory';
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
