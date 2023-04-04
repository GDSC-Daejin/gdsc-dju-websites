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
    padding: 7px 12px;
  }
`;
export const UnderlineFilter = styled(motion.div)<{ color: string }>`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  height: 35px;
  z-index: -1;
  background: ${({ color }) => color};
  border-radius: 20px;
  @media (max-width: ${(props) => props.theme.windowSizes.mobile}px) {
    bottom: 1px;
  }
`;

export const StyledLabel = styled(motion.div)<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  z-index: 1;
  background: transparent;
  transition: 500ms;
  ${({ selected }) =>
    selected
      ? css`
          color: #a35d29;
          font-weight: bold;
        `
      : css`
          color: #cecece;
        `}

  text-transform: capitalize;
`;
