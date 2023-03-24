import React from 'react';

import { GdsThemeProvider } from '@gdsc-dju/styled-components-theme';

import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import ElementLayoutBox from '../core/ElementLayoutBox';
import GlobalStyles from '../styles/globalStyles';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="ko" data-seed>
        <Head>
          <meta name="color-scheme" content="light dark" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <GdsThemeProvider mode={'auto'}>
            <GlobalStyles />
            <ElementLayoutBox>
              <NextScript />
              <Main />
            </ElementLayoutBox>
          </GdsThemeProvider>
        </body>
      </Html>
    );
  }
}
