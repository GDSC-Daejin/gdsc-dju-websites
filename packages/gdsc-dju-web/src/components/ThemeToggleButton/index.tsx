import React from 'react';
import styled from 'styled-components';
import DarkModeIcon from '../../assets/icons/darkModeIcon';
import LightModeIcon from '../../assets/icons/lightModeIcon';
import { ThemeType } from '../../hooks/useTheme';

const ThemeButton = styled.button`
  padding: 7px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0 solid transparent;
  cursor: pointer;
`;

const ThemeToggleButton: React.FC<{
  theme: ThemeType | undefined;
  toggleButton: () => void;
}> = ({ theme, toggleButton }) => {
  return (
    <ThemeButton onClick={toggleButton}>
      {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </ThemeButton>
  );
};

export default ThemeToggleButton;
