import type React from 'react';
import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  materialDark,
  materialLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { DarkModeContext } from '@gdsc-dju/styled-components-theme';

import remarkGfm from 'remark-gfm';

import { MarkdownStyle } from '@styles/markdown';

// import styles from '../styles/react-markdown.module.css';

interface Props {
  content: string;
}

const Preview = (props: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MarkdownStyle>
      <div className={'markdown-body'}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          // className={styles.reactMarkDown}
          components={{
            pre({ node, ...props }) {
              return <pre {...props} />;
            },
            code({
              node,
              inline,
              className,
              children,
              style,
              ...props
            }: CodeProps) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={isDarkMode ? materialDark : materialLight}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {props.content}
        </ReactMarkdown>
      </div>
    </MarkdownStyle>
  );
};

export default Preview;
