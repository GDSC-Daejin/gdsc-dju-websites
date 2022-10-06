import React, { useContext } from 'react';

import { MenuContext } from '@gdsc-dju/styled-components-theme';

import { navigationAnimate } from '@animations/NavigationAnimation';
import { ROUTES } from '@src/contents/routes';

import GDSCLogo from '../../../assets/logos/GDSCLogo.svg';

import {
  CategoryLine,
  MenuInner,
  MenuLink,
  MenuLogo,
  MenuRouteWrapper,
  MenuWrapper,
} from './styled';

const MobileMenuCategory = () => {
  const { toggleMenu } = useContext(MenuContext);
  const routeArray = Object.values(ROUTES);
  routeArray.shift();
  return (
    <MenuWrapper>
      <picture>
        <MenuLogo src={GDSCLogo} />
      </picture>
      <MenuInner variants={navigationAnimate} initial={false}>
        {routeArray.map((data, id) => (
          <MenuRouteWrapper
            key={id}
            onClick={() => {
              toggleMenu();
            }}
          >
            <MenuLink to={data}>{data.replace('/', '')}</MenuLink>
            <CategoryLine />
          </MenuRouteWrapper>
        ))}
      </MenuInner>
    </MenuWrapper>
  );
};

export default MobileMenuCategory;
