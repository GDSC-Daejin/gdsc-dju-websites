import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMenuButton = styled(motion.button)`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  z-index: 1001;
  padding: 0;
  @media (max-width: ${(props) => props.theme.windowSizes.tablet}px) {
    margin-left: 0px;
    margin-right: 0px;
    padding: 0;
    width: 20px;
    margin-top: 5px;
  }
`;
