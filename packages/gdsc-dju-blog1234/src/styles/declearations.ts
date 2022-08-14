import 'styled-components';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';
import { lightColors } from './lightColors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof lightColors;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
  }
}
