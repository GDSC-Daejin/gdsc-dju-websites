import React, { forwardRef } from 'react';
import { ValidationButtonWrapper } from './styled';
import { GDSCButton } from '../../Button';
import { TextInputProps } from '../TextInput';
import { ErrorBox, StyledInput, StyledInputWrapper } from '../TextInput/styled';

interface ValidationInputProps extends TextInputProps {
  validationCheck: () => void;
  isSuccess: boolean;
}

const ValidationInput = forwardRef<HTMLInputElement, ValidationInputProps>(
  (
    {
      name,
      placeholder,
      onChange,
      type,
      disabled,
      error,
      value,
      defaultValue,
      validationCheck,
      isSuccess,
    },
    ref,
  ) => {
    const disable =
      (error && error.type !== 'validate') ||
      value?.length === 0 ||
      value === undefined;

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
          <ValidationButtonWrapper>
            <GDSCButton
              text="중복확인"
              type="button"
              color="grey500"
              onClick={disable ? undefined : validationCheck}
              disable={disable}
            />
          </ValidationButtonWrapper>
        </StyledInputWrapper>
        <ErrorBox>{error && !isSuccess && <>{error.message}</>}</ErrorBox>
      </>
    );
  },
);

export default ValidationInput;
