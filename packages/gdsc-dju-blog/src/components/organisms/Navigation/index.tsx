import React, { useRef } from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  StyledLogoWrapper,
} from './styled';

import GdscBlogLogo from '../../../assets/logos/GdscBlogLogo';
import { useNavigate } from 'react-router';
import MenuToggleIcon from '@src/components/atoms/MenuToggleIcon';
import SideBar from '@src/components/organisms/SideMenu';
import SearchInput from '@src/components/atoms/input/SearchInput';

function Navigation() {
  return (
    <NavDesign>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <MenuToggleIcon />
              <StyledLogoWrapper to={'/'}>
                <GdscBlogLogo />
              </StyledLogoWrapper>
            </NavTask>
          </NavTaskWrapper>
        </NavInner>
      </NavWrapper>
      <SideBar />
    </NavDesign>
  );
}

export default Navigation;
