import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { ColorToken } from '@gdsc-dju/styled-components';

import GoogleLogo from '@assets/logos/GoogleLogo';

import { StyledButton } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  background?: ColorToken;
  color?: ColorToken;
  disable?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  isGoogle?: boolean;
}
const GDSCButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    text,
    background,
    disable,
    onClick,
    type,
    size = 'medium',
    isGoogle = false,
  } = props;
  return (
    <StyledButton
      color={background ? 'white' : 'grey900'}
      border={background ? background : 'grey200'}
      background={background ? background : 'white'}
      disable={disable}
      onClick={onClick}
      size={size}
      type={type}
      isIcon={isGoogle}
      {...props}
    >
      {isGoogle && <GoogleLogo />}
      {text}
    </StyledButton>
  );
});

export { GDSCButton };
