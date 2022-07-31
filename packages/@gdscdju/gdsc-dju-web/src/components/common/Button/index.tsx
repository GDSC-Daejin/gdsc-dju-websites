import React from 'react';
import { lightColors } from '../../../styles/lightColors';
import { StyledButton } from './styled';

interface ButtonProps {
  text: string;
  color?: keyof typeof lightColors;
  disable?: boolean;
  onClick?: (e?: any) => void;
  type?: 'button' | 'submit' | 'reset';
}
const GDSCButtonL: React.FC<ButtonProps> = ({
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
