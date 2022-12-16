import { useLayoutEffect } from 'react';

import { themeHandler } from '@gdsc-dju/gds-theme';

import type { AppProps } from 'next/app';
import '@gdsc-dju/gds-styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    themeHandler('auto');
  }, []);
  return <Component {...pageProps} />;
}
