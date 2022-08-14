import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const CategoryText = styled.div<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.h5};

  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.colors.grey900};
    `}
  padding: 2px 0;
`;
export const CategoryTextWrapper = styled(motion.div)<{ isActive: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey300};
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
    transform: translateY(-10px);
    color: ${({ theme }) => theme.colors.grey900};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
      color: ${({ theme }) => theme.colors.grey900};
    `}
`;
export const CategoryMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 713px;
  justify-content: space-between;
`;
export const CategoryCircleWrapper = styled(motion.div)`
  position: absolute;
  left: 45%;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export const CategoryCircle = styled.div<{ colors: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.colors};
`;
export const GDSCLogoWrapper = styled.div`
  position: absolute;
  width: 30px;
  left: -12px;
`;
