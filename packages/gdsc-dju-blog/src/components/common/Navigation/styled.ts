import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey800};
  font-size: ${({ theme }) => theme.fontSize.body2}
  font-weight: 500;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;
  border-radius: 8px;
`;

export const NavTaskWrapper = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  padding-left: 0;
`;

export const NavDesign = styled.nav<{
  background?: boolean;
  disable?: boolean;
}>`
  position: fixed;
  top: 0;
  z-index: 90;
  height: 70px;
  width: 100vw;
  display: flex;
  ${(props) =>
    props.background
      ? css`
          //background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: saturate(50%) blur(8px);
        `
      : css`
          background: ${({ theme }) => theme.colors.background};
          box-shadow: 0 4px 30px ${({ theme }) => theme.colors.greyOpacity100};
          border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
        `}
  ${(props) =>
    props.disable &&
    css`
      display: none;
    `}
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    height: 60px;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  height: 100%;
`;
export const NavInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const StyledLogoWrapper = styled.a`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
export const BlogLogo = styled.img``;
export const NavigationDesign = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  z-index: 990;
  height: 70px;
  width: 100%;
`;
export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 92%;
  margin: 0 auto;
  height: 100%;
`;
export const NavigationInner = styled.div`
  padding: 0 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 50px;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const DeskNavigationWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: relative;
`;
export const VectorWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  position: relative;
  & svg {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 8px;
    &:hover {
      fill: ${({ theme }) => theme.colors.grey300};
    }
  }
`;
export const SearchWrapper = styled.label`
  display: flex;
  margin-right: 40px;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const Search = styled.input`
  min-width: 400px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.body2};
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.grey900};
  background: ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    min-width: 280px;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }
`;

export const GdscLogoWrapper = styled.div`
  & svg {
    width: 40px;
    height: 20px;
    @media(min-width:  ${({ theme }) => theme.windowSize.tablet}px) {
      display: none;
    }
`;
