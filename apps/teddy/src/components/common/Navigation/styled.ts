import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledUl = styled(motion.ul)`
  display: flex;
  padding-left: 0;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledLi = styled(motion.li)`
  background: transparent;
  cursor: pointer;
  margin: 0 10px;
  //font-size: var(--body1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
`;
export const UnderlineFilter = styled(motion.div)<{ color: string }>`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 35px;
  z-index: -1;
  background: ${({ color }) => color};
`;

export const StyledLabel = styled(motion.div)<{
  selected: boolean;
  isDarkMode: boolean;
}>`
  z-index: 1;
  background: transparent;
  transition: 500ms;
  border-radius: 18px;
  padding: 6px 24px 6px 24px;
  color: var(--grey700);
  background-color: var(--grey100);
  ${({ selected, isDarkMode }) =>
    selected
      ? css`
          color: var(--grey50);
          font-weight: bold;
          background-color: #ff740f;
        `
      : isDarkMode &&
        css`
          color: var(--grey100);
          background-color: var(--grey900);
          font-weight: bold;
        `}

  text-transform: capitalize;
`;
