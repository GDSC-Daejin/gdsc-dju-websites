import 'styled-components';

import { colors } from './colors';
import { windowSize } from './windowSize';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: typeof colors;
    windowSize: typeof windowSize;
  }
}
