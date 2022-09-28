import styled from 'styled-components';

export const ContentBox = styled.article`
  .toastui-editor > div {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .toastui-editor-defaultUI {
    border: 0 solid !important;
  }
  .toastui-editor-mode-switch {
    border: 0 solid !important;
  }
  .toastui-editor-mode-switch .tab-item {
    border: 0 solid !important;
    background: ${({ theme }) => theme.colors.background}!important;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    color: ${({ theme }) => theme.colors.grey300};
    .active {
      color: ${({ theme }) => theme.colors.grey900};
    }
  }
  .toastui-editor-main .toastui-editor-md-splitter {
    background: ${({ theme }) => theme.colors.grey300}!important;
  }
  .hljs,
  .hljs-template-variable,
  span > span,
  pre > span {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .toastui-editor-defaultUI {
    border: 1px solid ${({ theme }) => theme.colors.grey200};
  }
  .toastui-editor-defaultUI-toolbar {
    background: ${({ theme }) => theme.colors.background} !important;
    border-color: ${({ theme }) => theme.colors.background} !important;
    button {
      border-color: ${({ theme }) => theme.colors.background} !important;
    }
  }
  .toastui-editor-mode-switch {
    background: ${({ theme }) => theme.colors.background} !important;
  }
  .toastui-editor-mode-switch .tab-item {
    .tab-item.active {
      background: ${({ theme }) => theme.colors.background} !important;
    }
  }

  .toastui-editor-defaultUI .ProseMirror {
    background: ${({ theme }) => theme.colors.background} !important;
  }
  .toastui-editor-md-preview {
    background: ${({ theme }) => theme.colors.background} !important;
  }
  .toastui-editor-contents {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    color: ${({ theme }) => theme.colors.grey900};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: 1.5;
    word-wrap: break-word;
  }

  .toastui-editor-contents .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  .toastui-editor-contents p,
  strong,
  b,
  em,
  i,
  small,
  a,
  li,
  ol,
  ul {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: 1.7;
  }

  .toastui-editor-contents h1:hover .anchor .octicon-link:before,
  .toastui-editor-contents h2:hover .anchor .octicon-link:before,
  .toastui-editor-contents h3:hover .anchor .octicon-link:before,
  .toastui-editor-contents h4:hover .anchor .octicon-link:before,
  .toastui-editor-contents h5:hover .anchor .octicon-link:before,
  .toastui-editor-contents h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  .toastui-editor-contents details,
  .toastui-editor-contents figcaption,
  .toastui-editor-contents figure {
    display: block;
  }

  .toastui-editor-contents summary {
    display: list-item;
  }

  .toastui-editor-contents [hidden] {
    display: none !important;
  }

  .toastui-editor-contents a {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.blue600};
    text-decoration: none;
  }

  .toastui-editor-contents a:active,
  .toastui-editor-contents a:hover {
    outline-width: 0;
  }

  .toastui-editor-contents abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  .toastui-editor-contents b,
  .toastui-editor-contents strong {
    font-weight: 600;
  }

  .toastui-editor-contents dfn {
    font-style: italic;
  }

  .toastui-editor-contents h1 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
  }

  .toastui-editor-contents mark {
    background-color: #fff8c5;
    color: ${({ theme }) => theme.colors.grey900};
  }

  .toastui-editor-contents small {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }

  .toastui-editor-contents sub,
  .toastui-editor-contents sup {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .toastui-editor-contents sub {
    bottom: -0.25em;
  }

  .toastui-editor-contents sup {
    top: -0.5em;
  }

  .toastui-editor-contents img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: ${({ theme }) => theme.colors.background};
  }

  .toastui-editor-contents code,
  .toastui-editor-contents kbd,
  .toastui-editor-contents pre,
  .toastui-editor-contents samp {
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }

  .toastui-editor-contents figure {
    margin: 1em 40px;
  }

  .toastui-editor-contents hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: ${({ theme }) => theme.colors.grey400};
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: ${({ theme }) => theme.colors.background};
    border: 0;
  }

  .toastui-editor-contents input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: inherit;
  }

  .toastui-editor-contents [type='button'],
  .toastui-editor-contents [type='reset'],
  .toastui-editor-contents [type='submit'] {
    -webkit-appearance: button;
  }

  .toastui-editor-contents [type='button']::-moz-focus-inner,
  .toastui-editor-contents [type='reset']::-moz-focus-inner,
  .toastui-editor-contents [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  .toastui-editor-contents [type='button']:-moz-focusring,
  .toastui-editor-contents [type='reset']:-moz-focusring,
  .toastui-editor-contents [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  .toastui-editor-contents [type='checkbox'],
  .toastui-editor-contents [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  .toastui-editor-contents [type='number']::-webkit-inner-spin-button,
  .toastui-editor-contents [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  .toastui-editor-contents [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  .toastui-editor-contents [type='search']::-webkit-search-cancel-button,
  .toastui-editor-contents [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  .toastui-editor-contents ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  .toastui-editor-contents ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  .toastui-editor-contents a:hover {
    text-decoration: underline;
  }

  .toastui-editor-contents hr::before {
    display: table;
    content: '';
  }

  .toastui-editor-contents hr::after {
    display: table;
    clear: both;
    content: '';
  }

  .toastui-editor-contents table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .toastui-editor-contents td,
  .toastui-editor-contents th {
    padding: 0;
    color: ${({ theme }) => theme.colors.grey900};
  }

  .toastui-editor-contents details summary {
    cursor: pointer;
  }

  .toastui-editor-contents details:not([open]) > *:not(summary) {
    display: none !important;
  }

  .toastui-editor-contents kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: 10px;
    color: ${({ theme }) => theme.colors.grey900};
    vertical-align: middle;
    background-color: #f6f8fa;
    border: ${({ theme }) => theme.colors.grey600};
    border-bottom-color: ${({ theme }) => theme.colors.grey400};
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  }

  .toastui-editor-contents h1,
  .toastui-editor-contents h2,
  .toastui-editor-contents h3,
  .toastui-editor-contents h4,
  .toastui-editor-contents h5,
  .toastui-editor-contents h6 {
    color: ${({ theme }) => theme.colors.grey900};
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .toastui-editor-contents h2 {
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleS};
    border-bottom: ${({ theme }) => theme.colors.grey400};
  }

  .toastui-editor-contents h3 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
  }

  .toastui-editor-contents h4 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }

  .toastui-editor-contents h5 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }

  .toastui-editor-contents p {
    margin-top: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.grey900};
  }

  .toastui-editor-contents blockquote {
    margin: 0;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.grey600};
    border-left: 0.25em solid ${({ theme }) => theme.colors.grey300};
  }

  .toastui-editor-contents ul,
  .toastui-editor-contents ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
    color: ${({ theme }) => theme.colors.grey900};
  }

  .toastui-editor-contents ol ol,
  .toastui-editor-contents ul ol {
    list-style-type: lower-roman;
  }

  .toastui-editor-contents ul ul ol,
  .toastui-editor-contents ul ol ol,
  .toastui-editor-contents ol ul ol,
  .toastui-editor-contents ol ol ol {
    list-style-type: lower-alpha;
  }

  .toastui-editor-contents dd {
    margin-left: 0;
  }

  .toastui-editor-contents tt,
  .toastui-editor-contents code {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .toastui-editor-contents pre {
    margin-top: 0;
    margin-bottom: 0;

    font-size: ${({ theme }) => theme.fontSizes.textL};
    word-wrap: normal;
  }

  .toastui-editor-contents .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  .toastui-editor-contents ::placeholder {
    color: ${({ theme }) => theme.colors.grey600};
    opacity: 1;
  }

  .toastui-editor-contents input::-webkit-outer-spin-button,
  .toastui-editor-contents input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .toastui-editor-contents .pl-c {
    color: ${({ theme }) => theme.colors.grey600};
  }

  .toastui-editor-contents .pl-c1,
  .toastui-editor-contents .pl-s .pl-v {
    color: ${({ theme }) => theme.colors.blue900};
  }

  .toastui-editor-contents .pl-e,
  .toastui-editor-contents .pl-en {
    color: #8250df;
  }

  .toastui-editor-contents .pl-smi,
  .toastui-editor-contents .pl-s .pl-s1 {
    color: ${({ theme }) => theme.colors.grey900};
  }

  .toastui-editor-contents .pl-ent {
    color: ${({ theme }) => theme.colors.green900};
  }

  .toastui-editor-contents .pl-k {
    color: ${({ theme }) => theme.colors.red900};
  }

  .toastui-editor-contents .pl-s,
  .toastui-editor-contents .pl-pds,
  .toastui-editor-contents .pl-s .pl-pse .pl-s1,
  .toastui-editor-contents .pl-sr,
  .toastui-editor-contents .pl-sr .pl-cce,
  .toastui-editor-contents .pl-sr .pl-sre,
  .toastui-editor-contents .pl-sr .pl-sra {
    color: ${({ theme }) => theme.colors.blue900};
  }

  .toastui-editor-contents .pl-v,
  .toastui-editor-contents .pl-smw {
    color: #953800;
  }

  .toastui-editor-contents .pl-bu {
    color: #82071e;
  }

  .toastui-editor-contents .pl-ii {
    color: #f6f8fa;
    background-color: #82071e;
  }

  .toastui-editor-contents .pl-c2 {
    color: #f6f8fa;
    background-color: #cf222e;
  }

  .toastui-editor-contents .pl-sr .pl-cce {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.green900};
  }

  .toastui-editor-contents .pl-ml {
    color: #3b2300;
  }

  .toastui-editor-contents .pl-mh,
  .toastui-editor-contents .pl-mh .pl-en,
  .toastui-editor-contents .pl-ms {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.blue900};
  }

  .toastui-editor-contents .pl-mi {
    font-style: italic;
    color: #24292f;
  }

  .toastui-editor-contents .pl-mb {
    font-weight: bold;
    color: #24292f;
  }

  .toastui-editor-contents .pl-md {
    color: #82071e;
    background-color: #ffebe9;
  }

  .toastui-editor-contents .pl-mi1 {
    color: #116329;
    background-color: #dafbe1;
  }

  .toastui-editor-contents .pl-mc {
    color: #953800;
    background-color: #ffd8b5;
  }

  .toastui-editor-contents .pl-mi2 {
    color: #eaeef2;
    background-color: #0550ae;
  }

  .toastui-editor-contents .pl-mdr {
    font-weight: bold;
    color: #8250df;
  }

  .toastui-editor-contents .pl-ba {
    color: #57606a;
  }

  .toastui-editor-contents .pl-sg {
    color: #8c959f;
  }

  .toastui-editor-contents .pl-corl {
    text-decoration: underline;
    color: #0a3069;
  }

  .toastui-editor-contents [data-catalyst] {
    display: block;
  }

  .toastui-editor-contents g-emoji {
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textM};
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
  }

  .toastui-editor-contents g-emoji img {
    width: 1em;
    height: 1em;
  }

  .toastui-editor-contents::before {
    display: table;
    content: '';
  }

  .toastui-editor-contents::after {
    display: table;
    clear: both;
    content: '';
  }

  .toastui-editor-contents > *:first-child {
    margin-top: 0 !important;
  }

  .toastui-editor-contents > *:last-child {
    margin-bottom: 0 !important;
  }

  .toastui-editor-contents a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .toastui-editor-contents .absent {
    color: #cf222e;
  }

  .toastui-editor-contents .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .toastui-editor-contents .anchor:focus {
    outline: none;
  }

  .toastui-editor-contents p,
  .toastui-editor-contents blockquote,
  .toastui-editor-contents ul,
  .toastui-editor-contents ol,
  .toastui-editor-contents dl,
  .toastui-editor-contents table,
  .toastui-editor-contents pre,
  .toastui-editor-contents details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .toastui-editor-contents blockquote > :first-child {
    margin-top: 0;
  }
  .toastui-editor-contents ul > li::before {
    margin-top: 9px;
  }

  .toastui-editor-contents blockquote > :last-child {
    margin-bottom: 0;
  }

  .toastui-editor-contents sup > a::before {
    content: '[';
  }

  .toastui-editor-contents sup > a::after {
    content: ']';
  }

  .toastui-editor-contents h1 .octicon-link,
  .toastui-editor-contents h2 .octicon-link,
  .toastui-editor-contents h3 .octicon-link,
  .toastui-editor-contents h4 .octicon-link,
  .toastui-editor-contents h5 .octicon-link,
  .toastui-editor-contents h6 .octicon-link {
    color: ${({ theme }) => theme.colors.grey900};
    vertical-align: middle;
    visibility: hidden;
  }

  .toastui-editor-contents h1:hover .anchor,
  .toastui-editor-contents h2:hover .anchor,
  .toastui-editor-contents h3:hover .anchor,
  .toastui-editor-contents h4:hover .anchor,
  .toastui-editor-contents h5:hover .anchor,
  .toastui-editor-contents h6:hover .anchor {
    text-decoration: none;
  }

  .toastui-editor-contents h1:hover .anchor .octicon-link,
  .toastui-editor-contents h2:hover .anchor .octicon-link,
  .toastui-editor-contents h3:hover .anchor .octicon-link,
  .toastui-editor-contents h4:hover .anchor .octicon-link,
  .toastui-editor-contents h5:hover .anchor .octicon-link,
  .toastui-editor-contents h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .toastui-editor-contents h1 tt,
  .toastui-editor-contents h1 code,
  .toastui-editor-contents h2 tt,
  .toastui-editor-contents h2 code,
  .toastui-editor-contents h3 tt,
  .toastui-editor-contents h3 code,
  .toastui-editor-contents h4 tt,
  .toastui-editor-contents h4 code,
  .toastui-editor-contents h5 tt,
  .toastui-editor-contents h5 code,
  .toastui-editor-contents h6 tt,
  .toastui-editor-contents h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  .toastui-editor-contents ul.no-list,
  .toastui-editor-contents ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  .toastui-editor-contents ol[type='1'] {
    list-style-type: decimal;
  }

  .toastui-editor-contents ol[type='a'] {
    list-style-type: lower-alpha;
  }

  .toastui-editor-contents ol[type='i'] {
    list-style-type: lower-roman;
  }

  .toastui-editor-contents div > ol:not([type]) {
    list-style-type: decimal;
  }

  .toastui-editor-contents ul ul,
  .toastui-editor-contents ul ol,
  .toastui-editor-contents ol ol,
  .toastui-editor-contents ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .toastui-editor-contents li > p {
    margin-top: 16px;
  }

  .toastui-editor-contents li + li {
    margin-top: 0.25em;
  }

  .toastui-editor-contents dl {
    padding: 0;
  }

  .toastui-editor-contents dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSizes.textM};
    font-style: italic;
    font-weight: 600;
  }

  .toastui-editor-contents dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .toastui-editor-contents table th {
    padding: 6px 13px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    background: ${({ theme }) => theme.colors.blue600};
  }

  .toastui-editor-contents table td {
    padding: 6px 13px;
    font-size: ${({ theme }) => theme.fontSizes.textM};
    border: 1px solid ${({ theme }) => theme.colors.grey300};
  }

  .toastui-editor-contents table tr {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    background-color: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.grey600};
  }

  .toastui-editor-contents table tr:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .toastui-editor-contents table img {
    background-color: transparent;
  }

  .toastui-editor-contents img[align='right'] {
    padding-left: 20px;
  }

  .toastui-editor-contents img[align='left'] {
    padding-right: 20px;
  }

  .toastui-editor-contents .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  .toastui-editor-contents span.frame {
    display: block;
    overflow: hidden;
  }

  .toastui-editor-contents span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid #d0d7de;
  }

  .toastui-editor-contents span.frame span img {
    display: block;
    float: left;
  }

  .toastui-editor-contents span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: #24292f;
  }

  .toastui-editor-contents span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .toastui-editor-contents span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  .toastui-editor-contents span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  .toastui-editor-contents span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .toastui-editor-contents span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  .toastui-editor-contents span.align-right span img {
    margin: 0;
    text-align: right;
  }

  .toastui-editor-contents span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  .toastui-editor-contents span.float-left span {
    margin: 13px 0 0;
  }

  .toastui-editor-contents span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  .toastui-editor-contents span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  .toastui-editor-contents code,
  .toastui-editor-contents tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: 6px;
  }

  .toastui-editor-contents code br,
  .toastui-editor-contents tt br {
    display: none;
  }

  .toastui-editor-contents del code {
    text-decoration: inherit;
  }

  .toastui-editor-contents pre code {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .toastui-editor-contents pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .toastui-editor-contents .highlight {
    margin-bottom: 16px;
  }

  .toastui-editor-contents .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .toastui-editor-contents .highlight pre,
  .toastui-editor-contents pre {
    padding: 16px;
    overflow: auto;
    font-size: 95%;
    line-height: 1.45;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.colors.boxShadow100};
    border-radius: 6px;
  }

  .toastui-editor-contents pre code,
  .toastui-editor-contents pre tt {
    display: inline;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .toastui-editor-contents .csv-data td,
  .toastui-editor-contents .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .toastui-editor-contents .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: ${({ theme }) => theme.colors.background};
  }

  .toastui-editor-contents .csv-data tr {
    border-top: 0;
  }

  .toastui-editor-contents .csv-data th {
    font-weight: 600;
    background: #f6f8fa;
    border-top: 0;
  }

  .toastui-editor-contents .footnotes {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    color: ${({ theme }) => theme.colors.grey600};
    border-top: 1px solid #d0d7de;
  }

  .toastui-editor-contents .footnotes ol {
    padding-left: 16px;
  }

  .toastui-editor-contents .footnotes li {
    position: relative;
  }

  .toastui-editor-contents .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid #0969da;
    border-radius: 6px;
  }

  .toastui-editor-contents .footnotes li:target {
    color: #24292f;
  }

  .toastui-editor-contents .footnotes .data-footnote-backref g-emoji {
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif;
  }

  .toastui-editor-contents .task-list-item {
    list-style-type: none;
  }

  .toastui-editor-contents .task-list-item label {
    font-weight: 400;
  }

  .toastui-editor-contents .task-list-item.enabled label {
    cursor: pointer;
  }

  .toastui-editor-contents .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .toastui-editor-contents .task-list-item .handle {
    display: none;
  }

  .toastui-editor-contents .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .toastui-editor-contents
    .contains-task-list:dir(rtl)
    .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .toastui-editor-contents ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
  .toastui-editor-contents p > code {
    color: ${({ theme }) => theme.colors.blue600};
    font-size: ${({ theme }) => theme.fontSizes.textL};
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif !important;
  }
  .toastui-editor-contents ol > li::before {
    margin-left: -35px;
  }
  code > span {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .token.operator {
    background: transparent !important;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #ccc;
    background: none;
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif !important;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2d2d2d;
  }

  /* Inline code */

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
  .toastui-editor-md-code.toastui-editor-md-delimiter {
    color: ${({ theme }) => theme.colors.grey900};
    background: transparent;
  }
  .toastui-editor-md-code {
    border-radius: 2px;
    background: transparent;
    color: #42a5f5;
  }
  .toastui-editor-md-thematic-break {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .toastui-editor-md-code-block-line-background {
    font-family: 'Google Sans Display', 'Noto Sans KR', sans-serif !important;
    background: ${({ theme }) => theme.colors.background};
  }
  .ProseMirror > div {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
    color: ${({ theme }) => theme.colors.grey900};
  }
  .toastui-editor-md-link {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }
  .toastui-editor-md-code.toastui-editor-md-marked-text {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .toastui-editor-md-strong {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  .toastui-editor-md-meta {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  .toastui-editor-md-code-block {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  .toastui-editor-md-block-quote {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }
  .toastui-editor-md-delimiter {
    font-size: unset;
  }
  .toastui-editor-md-marked-text {
    font-size: unset;
  }
  .toastui-editor-md-heading1 {
    font-size: ${({ theme }) => theme.fontSizes.titleL};
  }
  .toastui-editor-md-heading2 {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
  }
  .toastui-editor-md-heading3 {
    font-size: ${({ theme }) => theme.fontSizes.titleS};
  }
  .toastui-editor-md-list-item {
    font-size: ${({ theme }) => theme.fontSizes.textXl} !important;
  }
`;
