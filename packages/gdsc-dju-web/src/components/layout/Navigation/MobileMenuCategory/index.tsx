import { navigationAnimate } from '@animations/NavigationAnimation';
import { menuAtom } from '@src/store/menuAtom';
import { useAtom } from 'jotai';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '..';
import GDSCLogo from '../../../../assets/logos/GDSCLogo.svg';
import { StyledLink } from '../styled';

import './MobileMenu.css';
import {
  CategoryLine,
  MenuInner,
  MenuLogo,
  MenuRouteWrapper,
  MenuWrapper,
} from './styled';

const MobileMenuCategory = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useAtom(menuAtom);
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
        {ROUTES.map((data, id) => (
          <MenuRouteWrapper
            // variants={navigationItemAnimate}
            key={id}
            onClick={() => {
              navigate(data.route);
              setMenu(false);
            }}
          >
            <StyledLink>{data.title}</StyledLink>
            <CategoryLine />
          </MenuRouteWrapper>
        ))}
      </MenuInner>
    </MenuWrapper>
  );
};

export default MobileMenuCategory;
