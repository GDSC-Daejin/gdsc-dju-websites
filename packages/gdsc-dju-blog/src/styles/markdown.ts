import styled from 'styled-components';

export const MarkdownStyle = styled.div`
  @media (prefers-color-scheme: dark) {
    .markdown-body {
      color-scheme: dark;
      --color-prettylights-syntax-comment: #8b949e;
      --color-prettylights-syntax-constant: #79c0ff;
      --color-prettylights-syntax-entity: #d2a8ff;
      --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
      --color-prettylights-syntax-entity-tag: #7ee787;
      --color-prettylights-syntax-keyword: #ff7b72;
      --color-prettylights-syntax-string: #a5d6ff;
      --color-prettylights-syntax-variable: #ffa657;
      --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
      --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
      --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
      --color-prettylights-syntax-carriage-return-text: #f0f6fc;
      --color-prettylights-syntax-carriage-return-bg: #b62324;
      --color-prettylights-syntax-string-regexp: #7ee787;
      --color-prettylights-syntax-markup-list: #f2cc60;
      --color-prettylights-syntax-markup-heading: #1f6feb;
      --color-prettylights-syntax-markup-italic: #c9d1d9;
      --color-prettylights-syntax-markup-bold: #c9d1d9;
      --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
      --color-prettylights-syntax-markup-deleted-bg: #67060c;
      --color-prettylights-syntax-markup-inserted-text: #aff5b4;
      --color-prettylights-syntax-markup-inserted-bg: #033a16;
      --color-prettylights-syntax-markup-changed-text: #ffdfb6;
      --color-prettylights-syntax-markup-changed-bg: #5a1e02;
      --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
      --color-prettylights-syntax-markup-ignored-bg: #1158c7;
      --color-prettylights-syntax-meta-diff-range: #d2a8ff;
      --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
      --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
      --color-fg-default: ${({ theme }) => theme.colors.grey900};
      --color-fg-muted: ${({ theme }) => theme.colors.grey800};
      --color-fg-subtle: ${({ theme }) => theme.colors.grey700};
      --color-canvas-default: ${({ theme }) => theme.colors.background};
      --color-canvas-subtle: ${({ theme }) => theme.colors.background};
      --color-border-default: ${({ theme }) => theme.colors.blue600};
      --color-border-muted: ${({ theme }) => theme.colors.grey300};
      --color-neutral-muted: ${({ theme }) => theme.colors.blue200};
      --color-accent-fg: #58a6ff;
      --color-accent-emphasis: #1f6feb;
      --color-attention-subtle: rgba(187, 128, 9, 0.15);
      --color-danger-fg: #f85149;
    }
  }

  @media (prefers-color-scheme: light) {
    .markdown-body {
      color-scheme: light;
      --color-prettylights-syntax-comment: #6e7781;
      --color-prettylights-syntax-constant: #0550ae;
      --color-prettylights-syntax-entity: #8250df;
      --color-prettylights-syntax-storage-modifier-import: #24292f;
      --color-prettylights-syntax-entity-tag: #116329;
      --color-prettylights-syntax-keyword: #cf222e;
      --color-prettylights-syntax-string: #0a3069;
      --color-prettylights-syntax-variable: #953800;
      --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
      --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
      --color-prettylights-syntax-invalid-illegal-bg: #82071e;
      --color-prettylights-syntax-carriage-return-text: #f6f8fa;
      --color-prettylights-syntax-carriage-return-bg: #cf222e;
      --color-prettylights-syntax-string-regexp: #116329;
      --color-prettylights-syntax-markup-list: #3b2300;
      --color-prettylights-syntax-markup-heading: #0550ae;
      --color-prettylights-syntax-markup-italic: #24292f;
      --color-prettylights-syntax-markup-bold: #24292f;
      --color-prettylights-syntax-markup-deleted-text: #82071e;
      --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
      --color-prettylights-syntax-markup-inserted-text: #116329;
      --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
      --color-prettylights-syntax-markup-changed-text: #953800;
      --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
      --color-prettylights-syntax-markup-ignored-text: #eaeef2;
      --color-prettylights-syntax-markup-ignored-bg: #0550ae;
      --color-prettylights-syntax-meta-diff-range: #8250df;
      --color-prettylights-syntax-brackethighlighter-angle: #57606a;
      --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
      --color-prettylights-syntax-constant-other-reference-link: #0a3069;
      --color-fg-default: ${({ theme }) => theme.colors.grey900};
      --color-fg-muted: ${({ theme }) => theme.colors.grey800};
      --color-fg-subtle: ${({ theme }) => theme.colors.grey700};
      --color-canvas-default: ${({ theme }) => theme.colors.background};
      --color-canvas-subtle: ${({ theme }) => theme.colors.background};
      --color-border-default: ${({ theme }) => theme.colors.grey200};
      --color-border-muted: ${({ theme }) => theme.colors.grey300};
      --color-neutral-muted: ${({ theme }) => theme.colors.blue200};
      --color-accent-fg: #0969da;
      --color-accent-emphasis: #0969da;
      --color-attention-subtle: #fff8c5;
      --color-danger-fg: #cf222e;
    }
  }
  code > span {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    text-shadow: none !important;
    background: ${({ theme }) => theme.colors.background} !important;
    text-decoration: none !important;
  }

  .markdown-body > pre > div {
    background: ${({ theme }) => theme.colors.background} !important;
  }
  .markdown-body > pre {
    box-shadow: ${({ theme }) => theme.colors.boxShadow100};
    margin-bottom: 30px !important;
  }
  .markdown-body > p > code {
    font-family: 'Spoqa Han Sans Neo', 'Google Sans Display', sans-serif !important;
    font-size: ${({ theme }) => theme.fontSizes.textM};
  }

  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    margin: 0;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    font-family: 'Spoqa Han Sans Neo', 'Google Sans Display', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.textL};
    display: inline-block;
  }

  .markdown-body strong,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .markdown-body details,
  .markdown-body figcaption,
  .markdown-body figure {
    display: block;
  }

  .markdown-body summary {
    display: list-item;
  }

  .markdown-body [hidden] {
    display: none !important;
  }

  .markdown-body a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  .markdown-body a:active,
  .markdown-body a:hover {
    outline-width: 0;
  }

  .markdown-body abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  .markdown-body b,
  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body dfn {
    font-style: italic;
  }

  .markdown-body h1 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleXl};
    border-bottom: 1px solid var(--color-border-muted);
  }
  .markdown-body h2 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleL};
    border-bottom: 1px solid var(--color-border-muted);
  }
  .markdown-body h3 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    border-bottom: 1px solid var(--color-border-muted);
  }
  .markdown-body h4 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.titleS};
    border-bottom: 1px solid var(--color-border-muted);
  }
  .markdown-body h5 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
    border-bottom: 1px solid var(--color-border-muted);
  }
  .markdown-body h6 {
    margin: 0.67em 0;
    font-weight: 600;
    padding-bottom: 0.3em;
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
    border-bottom: 1px solid var(--color-border-muted);
  }

  .markdown-body mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-text-primary);
  }

  .markdown-body small {
    font-size: ${({ theme }) => theme.fontSizes.textS};
  }

  .markdown-body sub,
  .markdown-body sup {
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .markdown-body sub {
    bottom: -0.25em;
  }

  .markdown-body sup {
    top: -0.5em;
  }

  .markdown-body img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  .markdown-body code,
  .markdown-body kbd,
  .markdown-body pre,
  .markdown-body samp {
    font-family: monospace, monospace;
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .markdown-body figure {
    margin: 1em 40px;
  }

  .markdown-body hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.1rem;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  .markdown-body input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .markdown-body [type='button'],
  .markdown-body [type='reset'],
  .markdown-body [type='submit'] {
    -webkit-appearance: button;
  }

  .markdown-body [type='button']::-moz-focus-inner,
  .markdown-body [type='reset']::-moz-focus-inner,
  .markdown-body [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  .markdown-body [type='button']:-moz-focusring,
  .markdown-body [type='reset']:-moz-focusring,
  .markdown-body [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  .markdown-body [type='checkbox'],
  .markdown-body [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  .markdown-body [type='number']::-webkit-inner-spin-button,
  .markdown-body [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  .markdown-body [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  .markdown-body [type='search']::-webkit-search-cancel-button,
  .markdown-body [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  .markdown-body ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  .markdown-body ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body hr::before {
    display: table;
    content: '';
  }

  .markdown-body hr::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  .markdown-body td,
  .markdown-body th {
    padding: 0;
  }

  .markdown-body details summary {
    cursor: pointer;
  }

  .markdown-body details:not([open]) > *:not(summary) {
    display: none !important;
  }

  .markdown-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font-family: 'Spoqa Han Sans Neo', 'Google Sans';
    font-size: ${({ theme }) => theme.fontSizes.textL};
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
  }

  .markdown-body g-emoji img {
    width: 1em;
    height: 1em;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  .markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .markdown-body .absent {
    color: var(--color-danger-fg);
  }

  .markdown-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .markdown-body .anchor:focus {
    outline: none;
  }

  .markdown-body p,
  .markdown-body blockquote,
  .markdown-body ul,
  .markdown-body ol,
  .markdown-body dl,
  .markdown-body table,
  .markdown-body pre,
  .markdown-body details {
    margin-top: 0;
    line-height: 1.5;
    margin-bottom: 6px;
  }

  .markdown-body blockquote > :first-child {
    margin-top: 0;
  }

  .markdown-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .markdown-body sup > a::before {
    content: '[';
  }

  .markdown-body sup > a::after {
    content: ']';
  }

  .markdown-body h1 .octicon-link,
  .markdown-body h2 .octicon-link,
  .markdown-body h3 .octicon-link,
  .markdown-body h4 .octicon-link,
  .markdown-body h5 .octicon-link,
  .markdown-body h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  .markdown-body h1:hover .anchor,
  .markdown-body h2:hover .anchor,
  .markdown-body h3:hover .anchor,
  .markdown-body h4:hover .anchor,
  .markdown-body h5:hover .anchor,
  .markdown-body h6:hover .anchor {
    text-decoration: none;
  }

  .markdown-body h1:hover .anchor .octicon-link,
  .markdown-body h2:hover .anchor .octicon-link,
  .markdown-body h3:hover .anchor .octicon-link,
  .markdown-body h4:hover .anchor .octicon-link,
  .markdown-body h5:hover .anchor .octicon-link,
  .markdown-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .markdown-body h1 tt,
  .markdown-body h1 code,
  .markdown-body h2 tt,
  .markdown-body h2 code,
  .markdown-body h3 tt,
  .markdown-body h3 code,
  .markdown-body h4 tt,
  .markdown-body h4 code,
  .markdown-body h5 tt,
  .markdown-body h5 code,
  .markdown-body h6 tt,
  .markdown-body h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  .markdown-body ul.no-list,
  .markdown-body ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  .markdown-body ol[type='1'] {
    list-style-type: decimal;
  }

  .markdown-body ol[type='a'] {
    list-style-type: lower-alpha;
  }

  .markdown-body ol[type='i'] {
    list-style-type: lower-roman;
  }

  .markdown-body div > ol:not([type]) {
    list-style-type: decimal;
  }

  .markdown-body ul ul,
  .markdown-body ul ol,
  .markdown-body ol ol,
  .markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .markdown-body li > p {
    margin-top: 16px;
  }

  .markdown-body li + li {
    margin-top: 0.25em;
  }

  .markdown-body dl {
    padding: 0;
  }

  .markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSizes.textL};

    font-style: italic;
    font-weight: 600;
  }

  .markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .markdown-body table th {
    font-weight: 600;
  }

  .markdown-body table th,
  .markdown-body table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  .markdown-body table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  .markdown-body table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  .markdown-body table img {
    background-color: transparent;
  }

  .markdown-body img[align='right'] {
    padding-left: 20px;
  }

  .markdown-body img[align='left'] {
    padding-right: 20px;
  }

  .markdown-body .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  .markdown-body span.frame {
    display: block;
    overflow: hidden;
  }

  .markdown-body span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  .markdown-body span.frame span img {
    display: block;
    float: left;
  }

  .markdown-body span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  .markdown-body span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .markdown-body span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  .markdown-body span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  .markdown-body span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  .markdown-body span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  .markdown-body span.align-right span img {
    margin: 0;
    text-align: right;
  }

  .markdown-body span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  .markdown-body span.float-left span {
    margin: 13px 0 0;
  }

  .markdown-body span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  .markdown-body span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  .markdown-body code,
  .markdown-body tt {
    padding: 0.2rem 0.4rem;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.textM};
    border: 1px solid ${({ theme }) => theme.colors.blue600};
    border-radius: 6px;
  }

  .markdown-body code br,
  .markdown-body tt br {
    display: none;
  }

  .markdown-body del code {
    text-decoration: inherit;
  }

  .markdown-body pre code {
    font-size: ${({ theme }) => theme.fontSizes.textL};
  }

  .markdown-body pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .markdown-body .highlight {
    margin-bottom: 16px;
  }

  .markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .markdown-body .highlight pre,
  .markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: ${({ theme }) => theme.fontSizes.textL};

    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  .markdown-body pre code,
  .markdown-body pre tt {
    display: inline;
    max-width: fit-content;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .markdown-body .csv-data td,
  .markdown-body .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: ${({ theme }) => theme.fontSizes.textL};

    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .markdown-body .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .markdown-body .csv-data tr {
    border-top: 0;
  }

  .markdown-body .csv-data th {
    font-weight: 600;
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  .markdown-body .footnotes {
    font-size: ${({ theme }) => theme.fontSizes.textS};
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .markdown-body .footnotes ol {
    padding-left: 16px;
  }

  .markdown-body .footnotes li {
    position: relative;
  }

  .markdown-body .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .markdown-body .footnotes li:target {
    color: var(--color-fg-default);
  }

  .markdown-body .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .markdown-body .task-list-item {
    list-style-type: none;
  }

  .markdown-body .task-list-item label {
    font-weight: 400;
  }

  .markdown-body .task-list-item.enabled label {
    cursor: pointer;
  }

  .markdown-body .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .markdown-body .task-list-item .handle {
    display: none;
  }

  .markdown-body .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .markdown-body ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`;
