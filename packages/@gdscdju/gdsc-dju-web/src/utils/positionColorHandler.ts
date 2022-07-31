import { lightColors } from '../styles/lightColors';

export const position: PositionType = {
  frontend: lightColors.googleBlue,
  backend: lightColors.googleRed,
  android: lightColors.googleGreen,
  beginner: lightColors.orange900,
  designer: lightColors.googleYellow,
  // ml: 'Machine Learning',
} as const;
interface PositionType {
  [x: string]: string;
}

export function positionColorHandler(input: string) {
  const positionKey = Object.keys(position);
  const inputToLowerCase = input.toLowerCase();
  let result = '#fff';
  positionKey.map((key) => {
    if (inputToLowerCase.includes(key)) {
      result = position[key as keyof typeof position];
    }
  });
  return result;
}
