import { useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';
export const useTheme = () => {
  // 브라우저 테마 정보 확인
  useEffect(() => {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    let initTheme = isBrowserDarkMode ? 'dark' : 'light';

    // 사용자가 테마 설정을 직접 지정한 테마가 있는지 확인
    const localSettingTheme = localStorage.getItem('theme');

    // 지정한 테마가 존재한다면 해당 테마로 설정 없으면 브라우저 기본 설정 테마로 세팅
    if (localSettingTheme) {
      initTheme = localSettingTheme;
      setTheme(initTheme as ThemeType);
    }
  }, []);
  const [theme, setTheme] = useState<ThemeType>();
  const setMode = (mode: ThemeType) => {
    // 테마정보 변경하면 localstorage 에 저장해 다음에도 지정한 값으로 테마가 보이도록 설정
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme };
};
