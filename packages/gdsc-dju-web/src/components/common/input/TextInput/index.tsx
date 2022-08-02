import React, { ChangeEvent, forwardRef } from 'react';

import { StyledInputInner, StyledInputWrapper } from './styled';

export interface TextInputProps {
  name?: string;
  error?: string | string[] | undefined;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string | null;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder, onChange, type, disabled, error }, ref) => {
    const errorToggle = error != undefined && error != '필수입력란입니다.';

    return (
      <StyledInputWrapper error={errorToggle} disabled={!disabled}>
        <StyledInputInner
          className={'formInput'}
          name={name}
          type={type}
          onChange={onChange && onChange}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
        />
      </StyledInputWrapper>
    );
  },
);

export { TextInput };
