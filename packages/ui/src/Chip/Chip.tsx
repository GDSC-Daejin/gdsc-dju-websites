import React, { forwardRef } from 'react';

import styled, { css } from 'styled-components';

import { ChipProps } from './props';

export const StyledChip = styled.div<{
  size?: 'S' | 'L';
}>`
  padding: 1px 10px;
  border-radius: 50px;
  margin-right: 6px;
  opacity: 0.8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: var(--text-s);
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--grey900);
  color: var(--grey900);
  ${({ size }) =>
    size === 'L' &&
    css`
      font-size: var(--text-l);
    `};
  ${({ size }) =>
    size === 'S' &&
    css`
      height: 17px;
      padding: 1px 10px;
      border-radius: 50px;
      margin-right: 6px;
    `};
`;

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ children, size = 'L', ...rest }, ref) => {
    return (
      <StyledChip size={size} ref={ref} {...rest}>
        {children}
      </StyledChip>
    );
  },
);
export default Chip;
