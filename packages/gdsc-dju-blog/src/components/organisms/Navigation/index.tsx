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
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!inputRef.current) return;

    if (inputRef.current.value.trim() !== '')
      navigate(`/search/${inputRef.current.value}?type=all&page=1`);
  };

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
          <SearchInput onClick={handleSubmit} ref={inputRef} />
        </NavInner>
      </NavWrapper>
      <SideBar />
    </NavDesign>
  );
}

export default Navigation;
