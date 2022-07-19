import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
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
