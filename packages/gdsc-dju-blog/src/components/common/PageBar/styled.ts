import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PageBarWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const Number = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export const NumberCircle = styled(motion.div)`
  background: ${({ theme }) => theme.colors.grey900};
  width: 6px;
  height: 6px;
  position: absolute;
  border-radius: 50%;
  top: -10px;
  opacity: 0;
`;
export const NumberWrapper = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  height: 20px;
  margin-right: 22px;
  width: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  color: ${({ theme }) => theme.colors.grey400};
  transition: all 0.3s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
      color: ${({ theme }) => theme.colors.grey900};
    `}
  &:last-child {
    margin-right: 0;
  }
`;
export const NumberSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 0 40px;
`;
export const ArrowWrapper = styled.div`
  cursor: pointer;
  display: flex;
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
`;
