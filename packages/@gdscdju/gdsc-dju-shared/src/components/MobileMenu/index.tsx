import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { menuStore } from '../../store/menuStore';
import { sidebar } from '../animation';
import { ROUTES } from '../Navigation';
import GDSCLogo from '../../assets/GDSCLogo.svg';

export const MobileMenuWrapper = styled(motion.nav)`
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
export const MobileMenuBackground = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 0 solid transparent;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30%;
  border-color: ${(props) => props.theme.colors.grey200};
`;
export const StyledLink = styled(motion.div)<{ isRoute?: boolean }>`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  margin-bottom: 10px;
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
export const MenuInner = styled(motion.div)`
  margin-top: 50px;
  padding: 25px;
  width: 200px;
  z-index: 999;
`;
export const MenuLogo = styled.img`
  width: 100px;
`;

const MobileMenu = () => {
  const { menu, toggleMenu } = menuStore();
  const navigate = useNavigate();

  return (
    <MobileMenuWrapper initial={false} animate={menu ? 'open' : 'closed'}>
      <MobileMenuBackground variants={sidebar}>
        <MenuLogo src={GDSCLogo} />
        <MenuInner>
          {ROUTES.map((route) => (
            <StyledLink
              key={route.route}
              onClick={() => {
                toggleMenu();
                navigate(route.route);
              }}
            >
              {route.title}
            </StyledLink>
          ))}
        </MenuInner>
      </MobileMenuBackground>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
