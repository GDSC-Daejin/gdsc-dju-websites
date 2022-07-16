import React, { ChangeEvent, forwardRef } from 'react';
import { StyledTextArea, StyledTextAreaWrapper } from './styled';

export interface TextInputProps {
  name?: string;
  error?: string | string[] | undefined;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string | null;
  checkError?: (props: boolean) => void;
  disabled?: boolean;
}

const TextArea = forwardRef<HTMLInputElement, TextInputProps>(
  ({ name, placeholder, onChange, disabled = false, error }, ref) => {
    return (
      <StyledTextAreaWrapper>
        <StyledTextArea
          className={'formInput'}
          name={name}
          onChange={onChange && onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </StyledTextAreaWrapper>
    );
  },
);

export default TextArea;
