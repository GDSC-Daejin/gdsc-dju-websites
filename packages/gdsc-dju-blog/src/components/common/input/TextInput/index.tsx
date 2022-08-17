import React, { forwardRef } from 'react';

import { ErrorBox, StyledInput, StyledInputWrapper } from './styled';

export interface Iprops {
  name?: string;
  error?: any;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: any) => void;
  type?: string;
  value?: string | null;
  disabled?: boolean;
  defaultValue?: string | number;
}
const TextInput = forwardRef<HTMLInputElement, Iprops>(
  (
    { name, placeholder, onChange, type, disabled, error, value, defaultValue },
    ref,
  ) => {
    return (
      <>
        <StyledInputWrapper error={false} disabled={!disabled}>
          <StyledInput
            className={'formInput'}
            name={name}
            type={type}
            ref={ref}
            defaultValue={defaultValue}
            onChange={onChange && onChange}
            placeholder={placeholder}
            disabled={disabled}
          />
        </StyledInputWrapper>
        <ErrorBox>{error && <>{error.message}</>}</ErrorBox>
      </>
    );
  },
);

export default TextInput;
