import React from 'react';

import styled, { useTheme } from 'styled-components';

import { IconName } from '@assets/icons/MarkdownToolIcon/iconSet';
import Icon from '@atoms/Icon';

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.grey100};
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  const theme = useTheme();
  return (
    <StyledButton {...rest}>
      <Icon icon={icon} size={25} color={theme.colors.grey800} />
    </StyledButton>
  );
};

export default IconButton;
