import { navigationAnimate } from '@animations/NavigationAnimation';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import GDSCLogo from '../../../assets/logos/GDSCLogo.svg';

import './MobileMenu.css';
import {
  CategoryLine,
  MenuInner,
  MenuLogo,
  MenuRouteWrapper,
  MenuWrapper,
  StyledLink,
} from './styled';

export const ROUTES = [
  {
    route: '/introduce',
    title: 'Introduce',
  },
  {
    route: '/recruit',
    title: 'Recruiting',
  },
  {
    route: '/faq',
    title: 'FAQ',
  },
];

const SideMenu = () => {
  const navigate = useNavigate();

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

export default SideMenu;
