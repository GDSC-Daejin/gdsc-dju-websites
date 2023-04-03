import React from 'react';

import { NavigationRoutes } from './Navigation';

export interface NavigationProps {
  title?: string;
  routes?: NavigationRoutes;
  pointColor?: string;
  themeButton?: boolean;
  menuButton?:
    | 'left'
    | 'right'
    | 'none'
    | 'left-mobile-only'
    | 'right-mobile-only';
  sideMenu?: React.ReactNode;
  rightElement?: React.ReactNode;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  customLogo?: React.ReactNode;
  router?: (pathname: string) => void;
}
