import React from 'react';

import { sidebar } from '@animations/NavigationAnimation';

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
