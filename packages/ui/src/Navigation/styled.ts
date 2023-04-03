/** @docs-ignore */
import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 90;
  background: var(--background);
  box-shadow: 0 4px 30px var(--box-shadow100);
  width: 100vw;
  display: flex;
`;
export const NavLogoContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100vw;
  align-items: center;
  position: absolute;
`;
export const NavLogoContainerInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: row;
`;
export const NavInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 100;
`;
export const NavTaskWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  position: relative;
`;

export const LinkWrapper = styled.ul`
  margin-left: 20px;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 800px) {
    display: flex;
  } ;
`;
export const StyledLi = styled.li<{
  color: string;
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  padding: 10px 15px;
  list-style: none;
  font-size: var(--text-m);
  color: var(--grey700);
  text-decoration: none;
  text-transform: capitalize;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none;
  &:first-child {
    margin-left: 16px;
  }
  cursor: pointer;
  ${({ color }) =>
    color
      ? css`
          &:hover {
            color: var(--${color});
            background-color: var(--grey100);
            backdrop-filter: blur(10px);
            text-decoration: none;
          }
        `
      : css`
          &:hover {
            color: var(--${color});
            background-color: var(--grey100);
            backdrop-filter: blur(10px);
            text-decoration: none;
          }
        `};
  ${({ active, color }) =>
    active && color
      ? css`
          color: var(--${color});
        `
      : css`
          color: var(--${color});
        `};
`;

export const MenuButtonWrapper = styled.div<{
  position: 'left' | 'right' | 'left-mobile-only' | 'right-mobile-only';
}>`
  cursor: pointer;
  padding: 7px;
  ${({ position }) =>
    position === 'left' &&
    css`
      margin-right: 20px;
      @media (max-width: 600px) {
        margin-right: 20px;
      }
    `};
  ${({ position }) =>
    position === 'left-mobile-only' &&
    css`
      margin-right: 20px;
    `};
  ${({ position }) =>
    (position === 'right' || position === 'right-mobile-only') &&
    css`
      margin-left: 0;
    `};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ position }) =>
    (position === 'left-mobile-only' || position === 'right-mobile-only') &&
    css`
      @media (min-width: 800px) {
        display: none;
      }
    `}
`;
