import 'styled-components';
import { fontSize } from './fontSize';
import { lightColors } from './lightColors';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof lightColors;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
  }
}
// 스타일에 대한 타입 지정
