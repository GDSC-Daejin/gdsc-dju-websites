import { ColorToken } from '@gdsc-dju/styled-components-theme';

export const position: PositionType = {
  frontend: 'blue900',
  backend: 'red900',
  android: 'green900',
  beginner: 'orange900',
  designer: 'yellow900',
  // ml: 'Machine Learning',
} as const;
interface PositionType {
  [x: string]: ColorToken;
}

export function positionColorHandler(input: string) {
  return position[input.toLowerCase() as keyof typeof position];
}
