import { windowSize } from './windowSize';
import { fontSize } from './fontSize';

import { lightColors } from './lightColors';
import { darkColors } from './darkColors';
import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  colors: darkColors,
  windowSize: windowSize,
  fontSize: fontSize,
};
export const lightTheme: DefaultTheme = {
  colors: lightColors,
  windowSize: windowSize,
  fontSize: fontSize,
};
