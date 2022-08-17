import React, { forwardRef } from 'react';
import { ContentBox } from './styled';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Editor, Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useTheme } from '@src/hooks/ThemeHandler';
import chart from '@toast-ui/editor-plugin-chart';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';

interface ViewerProps {
  content: string;
}
interface EditorProps {
  content: string;
}

const ContentViewer = ({ content }: ViewerProps) => {
  return (
    <ContentBox>
      <Viewer
        initialValue={content}
        plugins={[
          [codeSyntaxHighlight, { highlighter: Prism }],
          chart,
          tableMergedCell,
        ]}
      />
    </ContentBox>
  );
};

const ContentEditor = forwardRef<Editor, EditorProps>(({ content }, ref) => {
  const { theme } = useTheme();
  return (
    <ContentBox>
      <Editor
        theme={theme}
        previewStyle="vertical"
        height="627px"
        initialEditType="markdown"
        initialValue={content}
        ref={ref}
        plugins={[
          colorSyntax,
          [codeSyntaxHighlight, { highlighter: Prism }],
          chart,
          tableMergedCell,
        ]}
      />
    </ContentBox>
  );
});

export { ContentViewer, ContentEditor };
