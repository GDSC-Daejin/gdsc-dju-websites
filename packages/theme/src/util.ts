import { color, fontSize, fontWeight } from './index';

export const isColorToken = (token: string): boolean => {
  const colorTokens = Object.keys(color);
  return colorTokens.includes(token);
};
export const isFontSizeToken = (token: string): boolean => {
  const fontSizeTokens = Object.keys(fontSize);
  return fontSizeTokens.includes(token);
};
export const isFontWeightToken = (token: string): boolean => {
  const fontWeightTokens = Object.keys(fontWeight);
  return fontWeightTokens.includes(token);
};
