const path = require('path');

const pnpapi = require('pnpapi');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const katex = require('rehype-katex');
const math = require('remark-math');

require('@babel/register')({
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  ignore: [
    path => {
      const locator = pnpapi.findPackageLocator(path);

      if (locator.name.startsWith('@toss/')) {
        return false;
      }

      return true;
    },
  ],
  cache: true,
});

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GDSC DJU Design',
  url: 'https://design.gdscdju.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GDSC DJU',
  projectName: 'GDS',
  themeConfig: {
    navbar: {
      title: 'GDSC DJU Design',
      logo: {
        alt: 'gdsc logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'ui/README',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/GDSC-Daejin/design-seed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/theme',
            },
          ],
        },
        {
          title: '더보기',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/GDSC-Daejin/design-seed',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GDSC DJU, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [require.resolve('./scripts/webpack5-compat.js')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../packages',
          routeBasePath: '/',
          exclude: ['**/CHANGELOG', '**/index.tsx.docs.md', '**/index.ts.docs.md', '**/styled.ts.docs.md', '**/props.ts.docs.md'],
          sidebarPath: require.resolve('./sidebars.libraries.js'),
          editUrl: ({ docPath }) => {
            const dirname = path.dirname(docPath);
            const markdownFilename = getFilename(docPath);
            const sourceFilename = getSourceFilename(markdownFilename);
            const editUrl = `${GITHUB_EDIT_PAGE_PREFIX}/packages/${dirname}/${sourceFilename}`;
            return editUrl;
          },
        },
        pages: {
          path: 'pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx,html}'],
          mdxPageComponent: '@theme/MDXPage',
        },
      },
    ],
  ],
};
const GITHUB_EDIT_PAGE_PREFIX =
  'https://github.com/GDSC-Daejin/design-seed/tree/master';

function getFilename(path) {
  const names = path.split('/');
  const filename = names[names.length - 1];

  if (filename == null) {
    throw new Error(`path가 올바르지 않습니다. ${path}`);
  }

  return filename;
}

function getSourceFilename(markdownFilename) {
  const isAutoGenerated = markdownFilename.endsWith('.docs.md');
  return isAutoGenerated
    ? markdownFilename.replace('.docs.md', '')
    : markdownFilename;
}

