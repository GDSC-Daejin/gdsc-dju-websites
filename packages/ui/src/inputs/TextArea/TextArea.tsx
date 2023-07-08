import React, { forwardRef, useState } from 'react';

import styled from 'styled-components';

import {
  StyledInputWrapper,
  inputTextStyles,
  inputDefaultStyle,
} from '../styled';

import { TextAreaProps } from './props';

export const StyledTextArea = styled.textarea`
  ${inputDefaultStyle}
  ${inputTextStyles}
  padding: 18px 18px;
  min-height: 100px;
  max-height: 350px;
  font-family: sans-serif;
  flex-grow: 1;
  cursor: auto;
  resize: vertical;
  transition: all 0.3s ease-in-out;
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ disabled, hasError, className, borderless = false, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <StyledInputWrapper
        hasError={hasError}
        isDisabled={disabled}
        isFocused={isFocused}
        borderless={borderless}
      >
        <StyledTextArea
          ref={ref}
          {...rest}
          disabled={disabled}
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
export default TextArea;
