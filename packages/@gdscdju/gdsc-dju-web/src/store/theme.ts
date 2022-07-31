import { atom } from 'recoil';

export const Theme = 'theme';
export const ThemeState = {
  light: true,
};
export const themeState = atom<typeof ThemeState>({
  key: Theme,
  default: ThemeState,
});
