import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
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
  font-size: ${({ theme }) => theme.fontSizes.textL};
  transition-delay: 0s;
  color: ${({ theme }) => theme.colors.grey900};
  ${({ isRoute }) =>
    isRoute &&
    css`
      color: ${({ theme }) => theme.colors.blue900};
    `};
  &:hover {
    color: ${({ theme }) => theme.colors.blue600};
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

export const MenuRouteWrapper = styled(motion.div)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
`;
export const CategoryLine = styled.div`
  background: ${({ theme }) => theme.colors.grey200};
  height: 1px;
  width: 100%;
  opacity: 50;
`;
