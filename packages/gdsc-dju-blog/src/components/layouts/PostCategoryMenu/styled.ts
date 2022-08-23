import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const PostCategoryText = styled(motion.div)<{ active?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.body1};

  font-weight: normal;
  font-family: 'Google Sans', sans-serif;
  ${(props) =>
    props.active &&
    css`
      color: ${({ theme }) => theme.colors.grey900};
    `}
  padding: 2px 0;
  @media screen and (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
   font-size: ${({ theme }) => theme.fontSize.body2};
`;
export const PostCategoryTextWrapper = styled(motion.div)<{
  isActive: boolean;
}>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grey300};
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
    color: ${({ theme }) => theme.colors.grey900};
  }
  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(-5px);
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey900};
      color: ${({ theme }) => theme.colors.grey900};
    `}
`;
export const PostCategoryMenuWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 378px;
  justify-content: space-between;
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 320px;
  }
`;
export const PostCategoryCircleWrapper = styled(motion.div)`
  position: absolute;
  left: 45%;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;
export const PostCategoryCircle = styled.div<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
