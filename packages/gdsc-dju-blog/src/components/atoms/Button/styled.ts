import styled, { css } from 'styled-components';
import { ColorToken } from '@gdsc-dju/styled-components';

export const StyledButton = styled.button<{
  color?: ColorToken;
  background?: ColorToken;
  size?: string;
  disable?: boolean;
  border?: string;
  isIcon: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 8px 30px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 50px;
  ${({ border }) =>
    border &&
    css`
      border: 1px solid ${border};
    `}
  ${({ disable }) =>
    disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
  ${({ isIcon }) =>
    isIcon &&
    css`
      padding: 8px 25px;
      gap: 4px;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 100%;
      padding: 8px 86px;
    `}
  
  ${({ background }) =>
    background &&
    css`
      background: ${({ theme }) => theme.colors[background]};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.colors[color]};
    `}
`;
