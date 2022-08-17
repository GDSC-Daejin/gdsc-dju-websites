import React, { forwardRef } from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from './styled';
import { lightColors } from '../../../styles/lightColors';
import { lightTheme } from '../../../styles/theme';

interface ButtonProps {
  text: string;
  color?: keyof typeof lightTheme.colors;
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
