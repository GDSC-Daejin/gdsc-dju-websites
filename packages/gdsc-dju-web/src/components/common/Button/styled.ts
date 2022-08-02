import styled, { css } from 'styled-components';
import { lightColors } from '../../../styles/lightColors';

export const StyledButton = styled.button<{
  color?: keyof typeof lightColors;
  background?: keyof typeof lightColors;
  size?: string;
  disable?: boolean;
  border?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid ${(props) => props.theme.colors.grey300};
  font-size: ${(props) => props.theme.fontSize.body2};
  padding: 10px 30px;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(25, 31, 40, 0.08);
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
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
  ${({ size }) =>
    size === 'large' &&
    css`
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
