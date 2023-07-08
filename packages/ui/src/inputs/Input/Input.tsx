import React, { forwardRef, useState } from 'react';

import styled, { css } from 'styled-components';

import {
  inputDefaultStyle,
  inputTextStyles,
  StyledInputWrapper,
} from '../styled';

import { InputProps } from './props';

export const StyledInputInner = styled.input<{ isDisabled?: boolean }>`
  ${inputDefaultStyle}
  ${inputTextStyles}
  transition: all 0.3s ease-in-out;
  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: not-allowed;
    `}
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ disabled, hasError, borderless = false, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <StyledInputWrapper
        hasError={hasError}
        isDisabled={disabled}
        isFocused={isFocused}
        borderless={borderless}
      >
        <StyledInputInner
          className={'formInput'}
          {...rest}
          disabled={disabled}
          ref={ref}
          onFocus={(event) => {
            setIsFocused(true);
            rest.onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            rest.onBlur?.(event);
          }}
        />
      </StyledInputWrapper>
    );
  },
);

export default Input;
