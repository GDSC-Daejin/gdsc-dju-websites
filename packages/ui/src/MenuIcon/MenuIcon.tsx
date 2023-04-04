import React from 'react';

import styled, { css } from 'styled-components';

import { MenuIconProps } from './props';

const StyledSvg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: var(--grey900);
`;
const StyledPath = styled.path`
  transition: 0.3s;
  stroke: var(--grey900);
  fill: var(--grey900);
`;

const MiddlePath = styled.path<{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
  stroke: var(--grey900);
  fill: var(--grey900);
  transition: 0.3s;
`;

const MenuIcon = ({ isMenuOpen }: MenuIconProps) => {
  return (
    <StyledSvg width="23" height="23" viewBox="0 0 23 23">
      <StyledPath
        strokeWidth="3"
        strokeLinecap="round"
        d={isMenuOpen ? 'M 3 19 L 17 3.5' : 'M 2 4 L 20 4'}
      />
      <MiddlePath
        strokeWidth="3"
        strokeLinecap="round"
        d="M 2 11 L 20 11"
        isActive={Boolean(isMenuOpen)}
      />
      <StyledPath
        strokeWidth="3"
        strokeLinecap="round"
        d={isMenuOpen ? 'M 3.5 3 L 17 19' : 'M 2 18.346 L 20 18.346'}
      />
    </StyledSvg>
  );
};

export default MenuIcon;
