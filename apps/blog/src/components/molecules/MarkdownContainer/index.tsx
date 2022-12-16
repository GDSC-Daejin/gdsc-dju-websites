import React, { useCallback, useRef } from 'react';

import styled from 'styled-components';

import MarkdownView from '@atoms/MarkdownView';
import { EditorState } from '@codemirror/state';
import useCodeMirror from '@hooks/use-codemirror';
import MarkdownToolBox from '@molecules/MarkdownToolBox';

const MarkdownContainerWrapper = styled.div<{ maxHeight?: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 400px;
  //max-height: ${({ maxHeight }) => maxHeight}px;
  //overflow: hidden;
`;
const MarkdownContainerInner = styled.div`
  word-break: break-word;
  box-sizing: border-box;
  padding: 10px;
  flex: 1;
  overflow: hidden;
  :last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.grey300};
  }
`;

type Props = {
  content: string;
  setContent: (content: string) => void;
};

const MarkdownContainer = ({ content, setContent }: Props) => {
  const editorHeight = useRef<HTMLDivElement>(null);

  const handleChange = useCallback(
    (state: EditorState) => setContent(state.doc.toString()),
    [setContent],
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: content,
    onChange: handleChange,
  });

  const refEditor = useRef<HTMLTextAreaElement>(null);
  //@ts-ignore
  return (
    <>
      {editorView && <MarkdownToolBox editorView={editorView} />}
      <MarkdownContainerWrapper maxHeight={editorHeight.current?.offsetHeight}>
        <MarkdownContainerInner ref={editorHeight}>
          <TestEditor
            ref={refEditor}
            onChange={(e) => setContent(e.target.value)}
          />
          {/*<MarkdownEditor refContainer={refContainer} />*/}
        </MarkdownContainerInner>
        <MarkdownContainerInner>
          <MarkdownView content={content} />
        </MarkdownContainerInner>
      </MarkdownContainerWrapper>
    </>
  );
};

const TestEditor = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  border: none;
  outline: none;
  resize: none;
  padding: 0;
`;

export default MarkdownContainer;
