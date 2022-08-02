import { DarkModeContext } from '@gdscdju/shared/src/DarkModeContext';
import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkModeIcon from '../../assets/icons/darkModeIcon';
import LightModeIcon from '../../assets/icons/lightModeIcon';

const ThemeButton = styled.button`
  padding: 7px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 0 solid transparent;
  cursor: pointer;
`;

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useContext(DarkModeContext);
  return (
    <ThemeButton onClick={toggleTheme}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </ThemeButton>
  );
};

export default ThemeToggleButton;
