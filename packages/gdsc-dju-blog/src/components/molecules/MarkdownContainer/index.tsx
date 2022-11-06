import React from 'react';

import styled from 'styled-components';

import MarkdownEditor from '@atoms/MarkdownEditor';
import MarkdownView from '@atoms/MarkdownView';

const MarkdownContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const MarkdownContainerInner = styled.div`
  word-break: break-word;
  padding: 3rem;
  flex: 1 1 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

type Props = {
  content: string;
  setContent: (content: string) => void;
};

const MarkdownContainer = ({ content, setContent }: Props) => {
  return (
    <MarkdownContainerWrapper>
      <MarkdownContainerInner>
        <MarkdownEditor content={content} setContent={setContent} />
      </MarkdownContainerInner>
      <MarkdownContainerInner>
        <MarkdownView content={content} />
      </MarkdownContainerInner>
    </MarkdownContainerWrapper>
  );
};

export default MarkdownContainer;
