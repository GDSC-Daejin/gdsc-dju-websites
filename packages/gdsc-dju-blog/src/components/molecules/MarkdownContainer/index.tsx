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
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  :last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.grey300};
  }
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
