import React, { forwardRef } from 'react';
import { ContentBox } from './styled';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
import { Editor, Viewer } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import { useTheme } from '@src/hooks/ThemeHandler';
import chart from '@toast-ui/editor-plugin-chart';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
/*Chart Plugin*/
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
/*Table Cell Plugin*/
import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/themes/prism-tomorrow.css';
/*Code Syntax Highlight */
import 'prismjs/themes/prism.css';
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
  onChange: () => void;
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

const ContentEditor = forwardRef<Editor, EditorProps>(
  ({ content, onChange }, ref) => {
    const { theme } = useTheme();
    return (
      <ContentBox>
        <Editor
          theme={theme}
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          initialValue={content}
          ref={ref}
          useCommandShortcut={true}
          // onChange={onChange}
          plugins={[
            colorSyntax,
            [codeSyntaxHighlight, { highlighter: Prism }],
            chart,
            tableMergedCell,
          ]}
        />
      </ContentBox>
    );
  },
);

export { ContentViewer, ContentEditor };
