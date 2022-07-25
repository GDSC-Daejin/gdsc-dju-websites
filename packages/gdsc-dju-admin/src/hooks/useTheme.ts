import { useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';
export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>();

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  const setMode = (mode: ThemeType) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  useEffect(() => {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'dark' : 'light';

    const localSettingTheme = localStorage.getItem('theme');

    if (localSettingTheme) {
      initTheme = localSettingTheme;
      setTheme(initTheme as ThemeType);
    }
  }, []);

  return { theme, toggleTheme };
};
