import { Link } from 'react-router-dom';
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
    `};
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
export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;
