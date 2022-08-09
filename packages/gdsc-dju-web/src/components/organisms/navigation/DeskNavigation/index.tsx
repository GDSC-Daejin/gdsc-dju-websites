import React from 'react';
import { useLocation } from 'react-router';
import GDSCLogo from '../../../../assets/logos/GDSCLogo.svg';
import MenuToggleIcon from '../../../atoms/MenuToggleIcon';
import ThemeToggleButton from '../../../atoms/ThemeToggleButton';
import DeskNavCategory from '../DeskNavCategory';
import MobileMenu from '../MobileMenu';
import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
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
export const Navigation: React.FC = () => {
  const location = useLocation();
  const checkLocation = location.pathname == ('/' || '/main');

  return (
    <NavDesign background={checkLocation}>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <StyledLogoWrapper to={'/'}>
                <StyledImg src={GDSCLogo} alt="GDSC-Chapter-Logo" />
                <StyledLogo>GDSC </StyledLogo>
                <SchoolName>Daejin</SchoolName>
                <SchoolNameUni>Univ.</SchoolNameUni>
              </StyledLogoWrapper>
              <DeskNavCategory />
            </NavTask>
          </NavTaskWrapper>
          <ThemeToggleButton />
          <MenuToggleIcon />
        </NavInner>
      </NavWrapper>
      <MobileMenu />
    </NavDesign>
  );
};

export default Navigation;
