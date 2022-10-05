import { navigationAnimate } from '@animations/NavigationAnimation';
import { MenuContext } from '@gdsc-dju/styled-components-theme';
import { ROUTES } from '@src/contents/routes';
import { menuAtom } from '@src/store/menuAtom';
import { useAtom } from 'jotai';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import GDSCLogo from '../../../../assets/logos/GDSCLogo.svg';

import './MobileMenu.css';
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
  return (
    <MenuWrapper>
      <picture>
        <MenuLogo src={GDSCLogo} />
      </picture>
      <MenuInner
        variants={navigationAnimate}
        initial={false}
        // animate={menu.appMenu ? 'open' : 'closed'}
      >
        {routeArray.map((data, id) => (
          <MenuRouteWrapper
            // variants={navigationItemAnimate}
            key={id}
            onClick={() => {
              toggleMenu();
            }}
          >
            <MenuLink to={data}>
              <div>{data.replace('/', '')}</div>
            </MenuLink>
            <CategoryLine />
          </MenuRouteWrapper>
        ))}
      </MenuInner>
    </MenuWrapper>
  );
};

export default MobileMenuCategory;
