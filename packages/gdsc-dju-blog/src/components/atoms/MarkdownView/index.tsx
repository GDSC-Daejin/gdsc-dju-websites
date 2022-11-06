import React from 'react';

import MarkdownPreview from '@uiw/react-markdown-preview';

type Props = {
  content: string;
};

const MarkdownView = ({ content }: Props) => {
  return (
    <div>
      <MarkdownPreview source={content} />
    </div>
  );
};

export default MarkdownView;
