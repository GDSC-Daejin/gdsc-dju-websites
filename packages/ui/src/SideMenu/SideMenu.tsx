import React, { useEffect } from 'react';

import styled, { css } from 'styled-components';

import { SideMenuProps } from './props';

export const SideMenuWrapper = styled.div<{ animate: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 91;
  transition: all 0.3s ease-out;
  backdrop-filter: saturate(60%) blur(2px);
  ${({ animate }) =>
    animate
      ? css`
          visibility: visible;
          opacity: 1;
          //transform: translateX(100vw);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          //transform: translateX(-100vw);
        `};
`;
export const SideMenuInner = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
`;

const SideMenu = ({ children, isMenuOpen = false }: SideMenuProps) => {
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!isMenuOpen) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [isMenuOpen]);

  return (
    <SideMenuWrapper animate={isMenuOpen}>
      <SideMenuInner>{children}</SideMenuInner>
    </SideMenuWrapper>
  );
};

export default SideMenu;
