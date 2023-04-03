import React, { forwardRef, useState } from 'react';

import styled from 'styled-components';

import FolderIcon from '../../assets/FolderIcon';
import {
  StyledInputWrapper,
  inputTextStyles,
  inputDefaultStyle,
} from '../styled';

import { FileInputProps } from './props';

export const InputImageWrapper = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 -8px 0 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const StyledFileInput = styled.div`
  ${inputDefaultStyle}
  ${inputTextStyles}
  color: var(--grey600);
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      placeholder: defaultPlaceholder,
      disabled,
      hasError,
      borderless = false,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [placeholder, setPlaceholder] = useState(
      defaultPlaceholder || 'Choose a file',
    );

    const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setPlaceholder(e.target.files[0].name);
        onChange && onChange(e);
      }
    };

    const inputRef = document.getElementById('formInput') as HTMLInputElement;
    return (
      <StyledInputWrapper
        hasError={hasError}
        isDisabled={disabled}
        borderless={borderless}
        onClick={() => {
          inputRef && inputRef.click();
        }}
      >
        <InputImageWrapper>
          <FolderIcon />
        </InputImageWrapper>
        <StyledFileInput>{placeholder}</StyledFileInput>
        <input
          {...rest}
          id={'formInput'}
          ref={ref}
          disabled={disabled}
          type={'file'}
          style={{ display: 'none' }}
          onChange={fileHandler}
        />
      </StyledInputWrapper>
    );
  },
);
export default FileInput;
