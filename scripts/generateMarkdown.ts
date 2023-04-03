//@ts-ignore
import fs from 'fs';

import glob from 'fast-glob';

interface BuildEntry {
  source: string;
  destination: string;
}

function pathsToBuildEntries(paths: string[]) {
  return paths.map((path) => ({
    source: path,
    destination: `${path}.docs.mdx`,
  }));
}

function filterFilesByContent(
  files: string[],
  condition: (content: string) => boolean,
) {
  return files.filter((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    return condition(content);
  });
}

function getFilename(
  path: string,
  options?: {
    withExtension: boolean;
  },
) {
  const { withExtension = true } = options ?? {};

  const names = path.split('/');
  const filename = names[names.length - 1];

  if (filename == null) {
    throw new Error(`path가 올바르지 않습니다. ${path}`);
  }

  return withExtension ? filename : filename.split('.')[0];
}

async function generateMarkdownFromEntries(entries: BuildEntry[]) {
  //@ts-ignore
  const documentation = await import('documentation');
  await Promise.all(
    entries.map(async ({ source, destination }) => {
      documentation
        .build(source, {
          external: [],
          shallow: true,
          extension: 'ts',
        })
        .then(documentation.formats.md as any)
        .then((markdown: string) => {
          const filename = getFilename(source, { withExtension: false });
          const title = `---\ntitle: ${filename}\n---\n`;
          const markdownWithTitle = `${title}${markdown}`;
          fs.writeFileSync(destination, markdownWithTitle);
        });
    }),
  );
}
const DOCS_IGNORE = '/** @docs-ignore */';
const main = async () => {
  //@ts-ignore
  const files = await glob('packages/**/*.{ts,tsx}', {
    ignore: [
      '**/*.{spec,test,d,setup,stories,config}.{ts,tsx}',
      '**/node_modules/**',
      '**/build/**',
      '**/stories/**',
      '**/index.ts',
      '**/web/**',
    ],
  });
  const filteredContent = filterFilesByContent(
    files,
    (content) => !content.includes(DOCS_IGNORE),
  );
  const entries = pathsToBuildEntries(filteredContent);
  await generateMarkdownFromEntries(entries);
};

main();
