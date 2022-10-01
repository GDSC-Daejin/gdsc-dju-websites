import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledUl = styled(motion.ul)`
  display: flex;
  padding-left: 0;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledLi = styled(motion.li)`
  background: transparent;
  cursor: pointer;
  height: 24px;
  padding: 11px 20px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  @media (max-width: ${(props) => props.theme.windowSizes.mobile}px) {
    margin: 0 2px;
  }
`;

export const StyledLabel = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  z-index: 1;
  background: transparent;
  color: #cecece;
  text-transform: capitalize;
`;
