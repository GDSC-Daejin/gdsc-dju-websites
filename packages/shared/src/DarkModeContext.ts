import { createContext } from 'react';

const noop = () => {};
type DarkModeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};
export const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  toggleTheme: noop,
});
