import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const StyledUnderlineInput = styled.input`
  border: solid 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.blue600};
  color: ${({ theme }) => theme.colors.grey900};
  height: 40px;
  width: 450px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey300};
    font-weight: 400;
  }
`;

interface UnderlineInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const UnderlineInput = forwardRef<HTMLInputElement, UnderlineInputProps>(
  (props, ref) => {
    return <StyledUnderlineInput {...props} />;
  },
);

export default UnderlineInput;
