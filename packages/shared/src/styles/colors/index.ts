import { ColorTheme } from './types';

export const assetLightGrey = {
  white: '#FFF',
  grey50: '#F9FAFB',
  grey100: '#F2F4F6',
  grey200: '#E5E8EB',
  grey300: '#D1D6DB',
  grey400: '#B0B8C1',
  grey500: '#8B95A1',
  grey600: '#6B7684',
  grey700: '#4E5968',
  grey800: '#333D4B',
  grey900: '#191F28',
};
export const assetDarkGrey = {
  white: '#191F28',
  grey50: '#333D4B',
  grey100: '#4E5968',
  grey200: '#6B7684',
  grey300: '#8B95A1',
  grey400: '#B0B8C1',
  grey500: '#D1D6DB',
  grey600: '#E5E8EB',
  grey700: '#F2F4F6',
  grey800: '#F9FAFB',
  grey900: '#FFF',
};
export const assetGreen = {
  green100: '#E8F5E9',
  green200: '#C8E6C9',
  green300: '#A5D6A7',
  green400: '#81C784',
  green500: '#66BB6A',
  green600: '#4CAF50',
  green900: '#34A853',
};
export const assetYellow = {
  yellow100: '#FFF8E1',
  yellow200: '#FFECB3',
  yellow300: '#FFE082',
  yellow400: '#FFD54F',
  yellow500: '#FFCA28',
  yellow600: '#FFC107',
  yellow900: '#FBBC04',
};
export const assetRed = {
  red100: '#FFEBEE',
  red200: '#FFCDD2',
  red300: '#EF9A9A',
  red400: '#E57373',
  red500: '#EF5350',
  red600: '#F44336',
  red900: '#EA4335',
};
export const assetOrange = {
  orange100: '#FFF3E0',
  orange200: '#FFE0B2',
  orange300: '#FFCC80',
  orange400: '#FFB74D',
  orange500: '#FFA726',
  orange600: '#FF9800',
  orange700: '#FB8C00',
  orange800: '#F57C00',
  orange900: '#FF740F',
};
export const assetBlue = {
  blue100: '#E3F2FD',
  blue200: '#BBDEFB',
  blue300: '#90CAF9',
  blue400: '#64B5F6',
  blue500: '#42A5F5',
  blue600: '#2196F3',
  blue900: '#4285F4',
};

export const themeColor = {
  boxShadow100:
    '0 0.8px 2px rgba(0,0,0,0.03), 0 2.7px 6.7px rgba(0,0,0,0.05),0 12px 30px rgba(0,0,0,0.1)',
  boxShadow300:
    '0 0.8px 2px rgba(0, 0, 0, 0.03), 0 2.7px 6.7px rgba(0, 0, 0, 0.05), 0 12px 20px rgba(0, 0, 0, 0.3)',
  backgroundOpacity900: 'rgba(255 ,255 ,255, 1)',
  backgroundOpacity: 'rgba(255 ,255 ,255, 0)',
  greyOpacity50: 'rgba(0, 23, 51, 0.02)',
  greyOpacity100: 'rgba(2, 32, 71, 0.05)',
  greyOpacity200: 'rgba(0, 27, 55, 0.1)',
  greyOpacity300: 'rgba(0, 29, 58, 0.18)',
  greyOpacity400: 'rgba(0, 29, 54, 0.31)',
  greyOpacity500: 'rgba(3, 24, 50, 0.46)',
  greyOpacity600: 'rgba(0, 19, 43, 0.58)',
  greyOpacity700: 'rgba(3, 18, 40, 0.7)',
  greyOpacity800: 'rgba(0, 12, 30, 0.8)',
  greyOpacity900: 'rgba(2, 9, 19, 0.91)',
};
const lightSemanticScheme = {
  background: '#fff',
  backgroundLow: 'grey100',
  boxShadow100:
    '0 0.8px 2px rgba(0,0,0,0.03), 0 2.7px 6.7px rgba(0,0,0,0.05),0 12px 30px rgba(0,0,0,0.1)',
};
const darkSemanticScheme = {
  background: '#252526',
  backgroundLow: 'grey100',
  boxShadow100:
    '0 0.8px 2px rgba(0,0,0,0.03), 0 2.7px 6.7px rgba(0,0,0,0.05),0 12px 30px rgba(0,0,0,0.1)',
};

export const pointColors = {
  ...assetGreen,
  ...assetYellow,
  ...assetRed,
  ...assetBlue,
  ...assetOrange,
};

export const light: Readonly<ColorTheme> = {
  ...assetLightGrey,
  ...pointColors,
  ...lightSemanticScheme,
};
export const dark: Readonly<ColorTheme> = {
  ...assetDarkGrey,
  ...pointColors,
  ...darkSemanticScheme,
};
