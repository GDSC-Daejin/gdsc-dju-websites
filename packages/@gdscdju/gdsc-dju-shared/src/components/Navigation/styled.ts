import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavWrapper = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 90;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 30px ${({ theme }) => theme.colors.greyOpacity100};
  width: 100vw;
  display: flex;
`;
export const NavInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const NavTaskWrapper = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;
export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.body1};
  flex-direction: row;
`;
export const GDSCImage = styled.img`
  height: 20px;
  width: 100%;
  margin: 0 8px;
`;

export const NavTask = styled.div<{ bold?: boolean; blue?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSize.body2};
  font-weight: 500;
  word-break: keep-all;
  white-space: nowrap;
  list-style: none;
  text-decoration: none;
  margin: 0 2px;
  margin-top: 2px;
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      color: ${({ theme }) => theme.colors.grey900};
      font-size: ${({ theme }) => theme.fontSize.h6};
      margin-top: 0;
    `}
  ${({ blue }) =>
    blue &&
    css`
      color: ${({ theme }) => theme.colors.googleBlue};
    `}
`;
export const LinkWrapper = styled.ul`
  margin-left: 20px;
  display: none;
  flex-direction: row;
  @media (min-width: ${({ theme }) => theme.windowSize.mobile}px) {
    display: flex;
  } ;
`;

export const StyledLink = styled(Link)<{ isRoute?: boolean }>`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-left: 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
  ${({ isRoute }) =>
    isRoute &&
    css`
      color: ${({ theme }) => theme.colors.tossBlueActive};
    `};
  &:hover {
    color: ${({ theme }) => theme.colors.tossBlueActive};
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    text-decoration: none;
  }
  &:first-child {
    border-left: 0;
  }
`;
