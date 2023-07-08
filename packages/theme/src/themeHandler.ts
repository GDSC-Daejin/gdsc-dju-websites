import { ThemeType } from './type';

export function themeHandler(mode: ThemeType) {
  const el = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    el.dataset.seedTheme = prefersDark.matches ? 'dark' : 'light';
    localStorage.setItem('theme', el.dataset.seedTheme);
  }
  if (mode === 'auto') {
    if (savedTheme) {
      el.dataset.seedTheme = savedTheme;
    } else {
      if (prefersLight.matches) {
        if ('addEventListener' in prefersLight) {
          prefersLight.addEventListener('change', apply);
        }
      } else if (prefersDark.matches) {
        if ('addEventListener' in prefersDark) {
          prefersDark.addEventListener('change', apply);
        }
      }
      apply();
    }
  }
  if (mode === 'light-only') {
    el.dataset.seedTheme = 'light';
    localStorage.setItem('theme', el.dataset.seedTheme);
  }
  if (mode === 'dark-only') {
    el.dataset.seedTheme = 'dark';
    localStorage.setItem('theme', el.dataset.seedTheme);
  }
}
export function changeTheme(theme?: string) {
  const el = document.documentElement;

  const currentTheme = localStorage.getItem('theme');
  if (theme) {
    el.dataset.seedTheme = theme;
    localStorage.setItem('theme', theme);
  } else {
    currentTheme === 'dark'
      ? localStorage.setItem('theme', 'light')
      : localStorage.setItem('theme', 'dark');
    el.dataset.seedTheme = currentTheme === 'dark' ? 'light' : 'dark';
  }
}
