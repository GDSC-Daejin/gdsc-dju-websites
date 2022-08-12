import { ColorScheme } from '@gdsc-dju/styled-components';
import React from 'react';

import { StyledButton } from './styled';

interface ButtonProps {
  text: string;
  color?: keyof ColorScheme;
  disable?: boolean;
  onClick?: (e?: any) => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
}

const GDSCButton: React.FC<ButtonProps> = ({
  text,
  color,
  disable,
  onClick,
  type,
  size = 'medium',
}) => {
  return (
    <StyledButton
      size={size}
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

export { GDSCButton };
