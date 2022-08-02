import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavDesign = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
`;
export const NavInner = styled.div`
  display: flex;
  flex: 1;
  max-width: 1140px;
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
export const StyledSubLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    display: none;
  }
`;
export const StyledImg = styled.img`
  margin-top: 3px;
  height: 15px;
  margin-right: 7px;
`;
export const StyledLogo = styled.div<any>`
  color: ${(props) => props.color};
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
export const SchoolName = styled.div`
  color: #4e4e4e;
  margin-right: 5px;
  font-size: 14px;
`;
export const WideNavigation = styled.div`
  z-index: 999;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
export const ShortNavigation = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  @media (min-width: 560px) {
    display: none;
  }
`;

export const StyledLink = styled(motion.div)`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
`;

export const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 5px;
  cursor: pointer;
  color: #4e5968;
  font-size: 14px;
  font-style: normal;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;
  border-radius: 8px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;

export const NavTaskWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;
export const StyledTeddyBear = styled.img`
  height: 50px;
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    display: none;
  }
`;
