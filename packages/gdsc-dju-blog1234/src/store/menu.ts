import { atom } from 'recoil';
const MENU = 'menu';

export const MENU_KEY = {
  APP_MENU: 'appMenu',
};
export const MenuState = {
  [MENU_KEY.APP_MENU]: false,
};
export const menuState = atom<typeof MenuState>({
  key: MENU,
  default: MenuState,
});
