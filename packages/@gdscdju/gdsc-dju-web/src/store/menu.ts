import { atom } from 'recoil';
const MENU = 'menu';

export const MENU_KEY = {
  APPMENU: 'appMenu',
  NAV: 'nav',
  FOOTER: 'footer',
};
export const MenuState = {
  [MENU_KEY.APPMENU]: false,
  [MENU_KEY.NAV]: true,
  [MENU_KEY.FOOTER]: true,
};
export const menuState = atom<typeof MenuState>({
  key: MENU,
  default: MenuState,
});
