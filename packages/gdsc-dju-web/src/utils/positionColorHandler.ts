export const position: PositionType = {
  frontend: 'blue900',
  backend: 'red900',
  android: 'green900',
  beginner: 'orange900',
  designer: 'yellow900',
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
