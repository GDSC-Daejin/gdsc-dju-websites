import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const CategoryText = styled.div<{ active?: boolean }>`
  font-size: ${(props) => props.theme.fontSizes.titleS};

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
      transform: translateY(-10px);
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
      color: ${({ theme }) => theme.colors.grey900};
    `}
`;
export const CategoryMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  gap: 40px;
`;
export const CategoryCircleWrapper = styled.div<{ animate?: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: -20px;
  left: 50%;
  height: fit-content;
  width: fit-content;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  ${({ animate }) =>
    animate
      ? css`
          opacity: 1;
          top: -10px;
        `
      : css`
          opacity: 0;
          top: -20px;
        `}
`;
export const CategoryCircle = styled.div<{ colors: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.colors};
`;
export const GDSCLogoWrapper = styled.div`
  position: relative;
  width: 26px;
`;
