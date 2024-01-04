import React, { forwardRef } from 'react';

import { StyledInputInner, StyledInputWrapper } from './styled';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error?: string | string[] | undefined;
  image?: string;
  file?: boolean;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}
const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { error, disabled } = props;

  const errorToggle = error !== undefined && error !== '필수입력란입니다.';

  return (
    <StyledInputWrapper error={errorToggle} disabled={!disabled}>
      <StyledInputInner
        className={'formInput'}
        {...props}
        disabled={disabled}
        ref={ref}
      />
    </StyledInputWrapper>
  );
});

export { TextInput };
