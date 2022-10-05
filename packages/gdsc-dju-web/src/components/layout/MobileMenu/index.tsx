import { sidebar } from '@animations/NavigationAnimation';
import React from 'react';
import MobileMenuCategory from './MobileMenuCategory';

import { MobileNavBackGround } from './styled';

const MobileMenu = () => {
  return (
    <MobileNavBackGround variants={sidebar}>
      <MobileMenuCategory />
    </MobileNavBackGround>
  );
};

export default MobileMenu;
