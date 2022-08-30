import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

const StyledUnderlineInput = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue300};
`;

interface UnderlineInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}
const UnderlineInput = forwardRef<HTMLInputElement, UnderlineInputProps>(
  (props, ref) => {
    return <StyledUnderlineInput {...props} />;
  },
);

export default UnderlineInput;
