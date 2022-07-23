import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;
export const SidebarContainer = styled.div`
  width: 100%;
`;
export const AdminContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledButtonWrapper = styled.div`
  margin-right: 10px;
`;
export const AdminHeaderWrapper = styled.div`
  background: white;
`;
export const StyledAdminButton = styled.button`
  border-style: none;
  border-radius: 10px;
  font-size: 1.4rem;
  color: white;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
  cursor: pointer;
  background: ${(props) => props.theme.colors.tossBlue};
  padding: 7px 20px;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.colors.tossBlueActive};
  }
  @media (max-width: 500px) {
    padding: 7px 13px;
    font-size: 1.3rem;
  }
`;
export const ButtonElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const NavigationWrapper = styled.nav<{ disable: boolean }>`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  ${({ disable }) =>
    disable &&
    css`
      display: none;
    `}
`;

export const NavDesign = styled(motion.nav)<{
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
          border-bottom: 1px solid ${(props) => props.theme.colors.grey200};
        `}
  ${(props) =>
    props.disable &&
    css`
      display: none;
    `}
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
  font-size: 1.6rem;
`;
export const StyledImg = styled.img`
  height: 20px;
  width: 100%;
  padding: 0 8px;
`;
export const StyledLogo = styled.div`
  color: ${(props) => props.theme.colors.grey800};
  margin-right: 5px;
  font-weight: bold;
  font-size: 2rem;
`;
export const SchoolNameUni = styled.div`
  color: ${(props) => props.theme.colors.grey600};
  font-size: ${(props) => props.theme.fontSize.body3};
  margin-top: 4px;
  margin-right: 5px;
  font-weight: 500;
`;
export const SchoolName = styled.div`
  color: ${(props) => props.theme.colors.grey600};
  font-size: ${(props) => props.theme.fontSize.body3};
  margin-top: 4px;
  margin-right: 3px;
  display: flex;
  font-weight: 500;
`;
export const WideNavigation = styled.div`
  z-index: 999;
  margin-left: 20px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;

export const ShortNavigation = styled(motion.nav)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 100vw;
  z-index: 91;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const StyledLink = styled(motion.div)<{ isRoute?: boolean }>`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  font-size: ${({ theme }) => theme.fontSize.body2};
  transition-delay: 0s;
  color: ${({ theme }) => theme.colors.grey900};
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
`;

export const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey800};
  font-size: 1.4rem;
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
export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px 7px;
  border-radius: 10px;
  transition-delay: 0.05s;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  :hover {
    background: ${(props) => props.theme.colors.grey100};
    cursor: pointer;
  }
`;

export const AdminNavCategoryWrapper = styled.nav`
  display: flex;
  align-items: center;
`;
export const StyledUserName = styled.div`
  color: ${(props) => props.theme.colors.grey700};
  font-size: 1.4rem;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 20px;
  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const StyledSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
`;
export const AdminBlockPage = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 50%;
  background: ${(props) => props.theme.colors.grey500};
  z-index: 999;
`;
