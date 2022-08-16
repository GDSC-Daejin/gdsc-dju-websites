import styled, { css } from 'styled-components';

export const HashTageWrapper = styled.div<{ light: boolean; size?: 'S' | 'L' }>`
  padding: 1px 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  border-radius: 50px;
  margin-right: 6px;
  opacity: 0.6;
  box-sizing: border-box;
  font-family: 'Google Sans', sans-serif;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSize.body4};
  ${({ light }) =>
    light &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.6);
      color: #fff;
      opacity: 1;
    `};
  ${({ size }) =>
    size === 'L' &&
    css`
      font-size: ${({ theme }) => theme.fontSize.body2};
    `};
  ${({ size }) =>
    size === 'S' &&
    css`
      height: 17px;
      padding: 1px 10px;
      border: 1px solid ${(props) => props.theme.colors.grey600};
      border-radius: 50px;
      margin-right: 6px;
    `};
`;
