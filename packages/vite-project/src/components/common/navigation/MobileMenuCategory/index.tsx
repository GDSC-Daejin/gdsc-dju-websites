import React from 'react';
import { StyledLink } from '../DeskNavigation/styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import {
  CategoryLine,
  MenuInner,
  MenuLogo,
  MenuRouteWrapper,
  MenuWrapper,
} from './styled';
import './MobileMenu.css';
import { useNavigate } from 'react-router-dom';
import { navigationAnimate } from '../../Variants/NavigationAnimation';
import { ROUTES } from '../DeskNavigation';
import GDSCLogo from '../../../../assets/GDSCLogo.svg';

const MobileMenuCategory = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useRecoilState(menuState);

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
              setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
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
