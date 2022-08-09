import React, { useState } from 'react';

import {
  AdminNavCategoryWrapper,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  NavigationWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
  StyledUserName,
} from './styled';
import { useLocation } from 'react-router';
import GDSCLogo from '../../../assets/logos/GDSCLogo.svg';
import AdminUserMenu from '../AdminUserMenu';
import { userAtom } from '../../../store/userAtom';
import { useAtom } from 'jotai';
import { ThemeType } from '../../../hooks/useTheme';
import ThemeToggleButton from '../../ThemeToggleButton';

const Navigation: React.FC<{
  theme: ThemeType | undefined;
  toggleTheme: () => void;
}> = ({ theme, toggleTheme }) => {
  const [adminMenuHandler, setAdminMenuHandler] = useState(false);
  const [user] = useAtom(userAtom);
  const location = useLocation();
  const isRoute = location.pathname === '/';
  return (
    <NavigationWrapper disable={isRoute}>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <StyledLogoWrapper to={'/certified'}>
                <StyledImg src={GDSCLogo} alt="GDSC-Chapter-Logo" />
                <StyledLogo>GDSC</StyledLogo>
                <SchoolName>Daejin </SchoolName>
                <SchoolNameUni>Admin</SchoolNameUni>
              </StyledLogoWrapper>
            </NavTask>
          </NavTaskWrapper>
          <AdminNavCategoryWrapper>
            <ThemeToggleButton theme={theme} toggleButton={toggleTheme} />
            {user.nickname && (
              <>
                <StyledUserName
                  onClick={() => setAdminMenuHandler(!adminMenuHandler)}
                >
                  Hi {user.nickname}
                </StyledUserName>
                <AdminUserMenu
                  isOpen={adminMenuHandler}
                  setIsOpen={setAdminMenuHandler}
                />
              </>
            )}
          </AdminNavCategoryWrapper>
        </NavInner>
      </NavWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
