import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const StyledTap = styled.div`
  padding: 7px 15px;
  margin-right: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-width: 0px;
  font-size: 18px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const StyledTapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StyledUl = styled.ul`
  display: flex;
  padding-left: 0;
  justify-content: flex-start;
`;
export const StyledLabel = styled.div<{ selected: boolean }>`
  z-index: 1;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.body2};
  ${({ selected }) =>
    selected &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
export const Underline = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 0;
  background: ${({ theme }) => theme.colors.blue500};
  border-radius: 40px;
`;
export const StyledLi = styled.li`
  background: transparent;
  cursor: pointer;
  height: 24px;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  font-size: ${({ theme }) => theme.fontSize.body1};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
export const StyledLine = styled.div`
  background: black;
  height: 2px;
  opacity: 10%;
`;
