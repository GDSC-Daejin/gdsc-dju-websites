import React, { forwardRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from './styled';
import { ColorToken } from '@gdsc-dju/styled-components';

interface ButtonProps {
  text: string;
  color?: ColorToken;
  disable?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const GDSCButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, color, disable, onClick, type, size = 'medium' }) => {
    return (
      <StyledButton
        color={color ? 'white' : 'grey900'}
        border={color ? color : 'white'}
        background={color ? color : 'white'}
        disable={disable}
        onClick={onClick}
        size={size}
        type={type}
      >
        {text}
      </StyledButton>
    );
  },
);

export { GDSCButton };
