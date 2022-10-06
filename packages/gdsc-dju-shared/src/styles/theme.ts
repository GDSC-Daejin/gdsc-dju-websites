import type { DefaultTheme } from 'styled-components';

import { darkColors } from './darkColors';
import { fontSize } from './fontSize';
import { lightColors } from './lightColors';
import { windowSize } from './windowSize';

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
