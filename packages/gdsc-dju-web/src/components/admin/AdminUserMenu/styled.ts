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
  background: white;
  padding: 5px 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 10px;
`;
export const MenuElement = styled(motion.button)`
  font-size: 1.6rem;
  padding: 5px 15px;
  border: 0 solid;
  border-radius: 5px;
  background-color: white;
`;
