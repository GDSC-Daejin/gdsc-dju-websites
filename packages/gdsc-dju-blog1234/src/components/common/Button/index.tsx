import React from 'react';
import { useTheme } from 'styled-components';
import { StyledButton } from './styled';
import { lightColors } from '../../../styles/lightColors';
import { lightTheme } from '../../../styles/theme';

interface ButtonProps {
  text: string;
  color?: keyof typeof lightTheme.colors;
  disable?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const GDSCButtonL: React.FC<ButtonProps> = ({
  text,
  color,
  disable,
  onClick,
  type,
}) => {
  const theme = useTheme();
  return (
    <StyledButton
      color={color ? 'white' : 'grey900'}
      border={color ? color : 'white'}
      size="large"
      background={color ? color : 'white'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
const GDSCButton: React.FC<ButtonProps> = ({
  text,
  color,
  disable,
  onClick,
  type,
}) => {
  return (
    <StyledButton
      color={color ? 'white' : 'grey900'}
      border={color ? color : 'white'}
      background={color ? color : 'white'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};

export { GDSCButtonL, GDSCButton };
