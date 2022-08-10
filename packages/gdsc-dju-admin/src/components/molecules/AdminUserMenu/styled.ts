import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AdminUserMenuWrapper = styled(motion.div)`
  position: fixed;
  right: 3%;
  top: 60px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const MenuElement = styled(motion.button)`
  font-size: ${({ theme }) => theme.fontSize.body1};
  padding: 5px 15px;
  border: 0 solid;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey500};
  }
`;
