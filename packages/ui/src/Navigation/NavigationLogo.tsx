import React, { forwardRef, HTMLAttributes } from 'react';

import { isColorToken } from '@gdsc-dju/gds-theme';

import styled, { css } from 'styled-components';

import GDSCLogo from '../assets/GDSCLogo';

interface NavigationLogoProps extends HTMLAttributes<HTMLDivElement> {
  customLogo?: React.ReactNode;
  title?: string;
  pointColor?: string;
}

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--text-xl);
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
  cursor: pointer;
  @media (max-width: var(--window-size-mobile)) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const NavSubtitle = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--grey600);
  font-size: var(--text-m);
  font-weight: var(--font-weight-medium);
  word-break: keep-all;
  margin-top: 2px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
  ${({ color }) =>
    color && isColorToken(color)
      ? css`
          color: ${color};
        `
      : css`
          color: ${color};
        `}
`;
export const LogoTitle = styled.div`
  margin-left: 4px;
  font-weight: var(--font-weight-bold);
  font-size: var(--text-xxl);
  color: var(--grey800);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
`;
export const LogoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  @media (max-width: var(--window-size-mobile)) {
    display: none;
  }
`;

const NavigationLogo = forwardRef<HTMLDivElement, NavigationLogoProps>(
  ({ customLogo, title, pointColor, ...rest }, ref) => {
    return (
      <>
        {customLogo ? (
          <>{customLogo}</>
        ) : (
          <StyledLogoWrapper ref={ref} {...rest}>
            <GDSCLogo />
            <LogoTextWrapper>
              <LogoTitle>GDSC</LogoTitle>
              {title ? (
                <>
                  <NavSubtitle>DJU</NavSubtitle>
                  <NavSubtitle color={pointColor}>{title}</NavSubtitle>
                </>
              ) : (
                <>
                  <NavSubtitle color={pointColor}>Daejin</NavSubtitle>
                  <NavSubtitle color={pointColor}>Univ.</NavSubtitle>
                </>
              )}
            </LogoTextWrapper>
          </StyledLogoWrapper>
        )}
      </>
    );
  },
);

export default NavigationLogo;
