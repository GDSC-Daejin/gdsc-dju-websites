import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Google Sans Display';
    src:
            local("Google Sans Display"),
            url('/fonts/GoogleSansDisplay-Regular.woff2') format('woff2'),
            url('/fonts/GoogleSansDisplay-Regular.woff') format('woff'),
            url('/fonts/GoogleSansDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }  @font-face {
    font-family: 'Google Sans Display';
    src:
            local("Google Sans Display"),
            url('/fonts/GoogleSansDisplay-Medium.woff2') format('woff2'),
            url('/fonts/GoogleSansDisplay-Medium.woff') format('woff'),
            url('/fonts/GoogleSansDisplay-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }  @font-face {
    font-family: 'Google Sans Display';
    src:
            local("Google Sans Display"),
            url('/fonts/GoogleSansDisplay-Bold.woff2') format('woff2'),
            url('/fonts/GoogleSansDisplay-Bold.woff') format('woff'),
            url('/fonts/GoogleSansDisplay-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:
            local('Spoqa Han Sans Neo'),
            url('/fonts/SpoqaHanSansNeo-Thin.woff2') format('woff2'),
            url('/fonts/SpoqaHanSansNeo-Thin.woff') format('woff'),
            url('/fonts/SpoqaHanSansNeo-Thin.ttf') format('truetype');
    font-weight: 100;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;
  } @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-light.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-light.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-light.ttf') format('truetype');
    font-weight: 300;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:
            local('Spoqa Han Sans Neo'),
            url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
            url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
            url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-weight: 400;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;
  } @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-weight: 500;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;

  }  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src:local('Spoqa Han Sans Neo'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
    url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
    url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-weight: 700;
    font-display: swap;
    unicode-range: U+AC00-U+D7A3;
  }
  * {
    margin: 0;
    font-size: 10px;
    word-break: keep-all;
    -webkit-tap-highlight-color: transparent;
    transition: color, background-color 0.3s ease-in-out;
    font-family: 'Google Sans Display','Spoqa Han Sans Neo', sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html{
    background: ${({ theme }) => theme.colors.background};
  }


  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
`;
export default GlobalStyles;
