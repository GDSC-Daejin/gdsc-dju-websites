import create from 'zustand';

export const date = new Date();

type MenuType = {
  menu: boolean;
  toggleMenu: (type?: boolean) => void;
};

export const menuStore = create<MenuType>((set) => ({
  menu: false,
  toggleMenu: (type?: boolean) =>
    set((state) => {
      const result = type ?? !state.menu;
      return {
        menu: result,
      };
    }),
}));
