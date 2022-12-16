import type React from 'react';
import { useContext } from 'react';

import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

import { marked } from 'marked';
import styled from 'styled-components';

import { MarkdownStyle } from '@styles/markdown';

// import styles from '../styles/react-markdown.module.css';

interface Props {
  content: string;
}

const Preview = ({ content }: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);
  marked.setOptions({ breaks: true, gfm: true });

  return (
    <MarkdownStyle>
      <Viewer dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </MarkdownStyle>
  );
};

const Viewer = styled.div``;

export default Preview;
