import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { DarkModeContext } from './DarkModeContext';
import { ColorScheme } from './styles/colors/types';
import { fontSize } from './styles/fontSize';
import { colors } from './styles';
import { windowSize } from './styles/windowSize';

import { BehaviorMode, getThemeName } from './types/utils';
import { useDarkMode } from './useDarkMode';

interface ThemeProviderProps {
  children: React.ReactNode;
  mode: BehaviorMode;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorScheme;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
  }
}

export const GdsThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  mode = 'auto',
}) => {
  const darkMode = useDarkMode();

  const theme = React.useMemo((): DefaultTheme => {
    const colorTheme = colors[getThemeName(mode, darkMode.isDarkMode)];
    return {
      colors: colorTheme,
      windowSize: windowSize,
      fontSize: fontSize,
    };
  }, [mode, darkMode.isDarkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};
