import React, { HTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

import { StyledMenuButton } from './styled';

const MiddlePath = styled.path<{ isMenuOpen: boolean }>`
  fill: var(--grey900);
  stroke: var(--grey900);
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;
const StyledSvg = styled.svg`
  fill: var(--grey900);
`;
const StyledPath = styled.path`
  fill: var(--grey900);
  stroke: var(--grey900);
`;

interface MenuToggleIconProps extends HTMLAttributes<HTMLButtonElement> {
  isMenuOpen: boolean;
}

const MenuToggleIcon = ({ isMenuOpen, ...rest }: MenuToggleIconProps) => {
  return (
    <StyledMenuButton {...rest}>
      <StyledSvg width="23" height="23" viewBox="0 0 23 23">
        <StyledPath
          strokeWidth="3"
          strokeLinecap="round"
          d={isMenuOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
        />
        <MiddlePath
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          isMenuOpen={isMenuOpen}
        />
        <StyledPath
          strokeWidth="3"
          strokeLinecap="round"
          d={isMenuOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
        />
      </StyledSvg>
    </StyledMenuButton>
  );
};

export default MenuToggleIcon;
