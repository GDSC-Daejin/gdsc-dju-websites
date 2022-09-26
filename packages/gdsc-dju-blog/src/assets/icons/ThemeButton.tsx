import React from 'react';
import styled from 'styled-components';
import DarkModeIcon from '../../assets/icons/DarkModeIcon.svg';
import LightModeIcon from '../../assets/icons/LightModeIcon.svg';

const ThemeButtonInner = styled.img`
  position: fixed;
  right: 60px;
  bottom: 60px;
  z-index: 999;
  cursor: pointer;
`;

const ThemeButton: React.FC<{
  toggleTheme: () => void;
  isDarkMode: boolean | undefined;
}> = ({ toggleTheme, isDarkMode }) => {
  return (
    <ThemeButtonInner
      onClick={() => {
        toggleTheme();
      }}
      src={isDarkMode ? LightModeIcon : DarkModeIcon}
    />
  );
};

export default ThemeButton;
