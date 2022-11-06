import React from 'react';

import styled from 'styled-components';

import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import CodeMirror from '@uiw/react-codemirror';

type Props = {
  content: string;
  setContent: (content: string) => void;
};

const MarkdownEditor = ({ content, setContent }: Props) => {
  return (
    <MarkdownEditorBlock>
      <CodeMirror
        placeholder={'# 마크다운으로 글을 작성해보세요.'}
        value={content}
        onChange={(value, viewUpdate) => setContent(value)}
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
      />
    </MarkdownEditorBlock>
  );
};

const MarkdownEditorBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  /* width */
  *::-webkit-scrollbar {
    width: 4px;
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey400}!important;
    border-radius: 1px !important;
  }
  .cm-editor {
    font-size: ${({ theme }) => theme.fontSizes.textXxl};
  }

  .cm-focused {
    outline: none !important;
  }
  .cm-gutters {
    display: none;
  }
  .cm-scroller {
    background: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    display: contents !important;
  }

  .cm-content {
    display: flex;
    flex-direction: column;
  }
  .cm-line,
  .cm-selectionMatch,
  .cm-content,
  .ͼe,
  .ͼm,
  .ͼ1,
  .ͼ2,
  .ͼ3,
  .ͼ4,
  .ͼ5,
  .ͼ6,
  .ͼ7,
  .ͼ8,
  .ͼ9,
  .ͼc,
  .ͼb,
  .ͼg,
  .ͼb,
  .ͼl,
  .ͼi,
  .ͼa {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  span.ͼ7.ͼ5 {
    font-size: ${({ theme }) => theme.fontSizes.titleS};
  }
  .cm-selectionMatch {
    background: ${({ theme }) => theme.colors.blue300};
  }

  .cm-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.textXl};
  }

  */* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grey400};
  }

  & > .wrapper {
    min-height: 0;
    padding-bottom: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .CodeMirror-lines {
    padding: 4px 0; /* Vertical padding around content */
    padding-bottom: 3rem;
  }

  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 3rem; /* Horizontal padding of content */
  }

  min-height: 0;
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey900};
  font-family: 'Fira Mono', monospace;
  /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', */
  .cm-header {
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.grey900};
  }
  .cm-header-1 {
    font-size: 2.5rem;
  }
  .cm-header-2 {
    font-size: 2rem;
  }
  .cm-header-3 {
    font-size: 1.5rem;
  }
  .cm-header-4,
  .cm-header-5,
  .cm-header-6 {
    font-size: 1.3125rem;
  }
  .cm-strong,
  .cm-em {
    color: ${({ theme }) => theme.colors.grey900};
  }
  .CodeMirror-placeholder {
    color: ${({ theme }) => theme.colors.grey500};
    font-style: italic;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    font-size: 0.875rem;
    .cm-header-1 {
      font-size: 2rem;
    }
    .cm-header-2 {
      font-size: 1.5rem;
    }
    .cm-header-3 {
      font-size: 1.15rem;
    }
    .cm-header-4,
    .cm-header-5,
    .cm-header-6 {
      font-size: 1rem;
    }
  }
`;

export default MarkdownEditor;
