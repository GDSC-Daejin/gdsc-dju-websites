import React from 'react';

import { EditorStyle } from '@styles/editor';

interface Props {
  refContainer: React.MutableRefObject<HTMLDivElement | null>;
}

const Editor: React.FC<Props> = ({ refContainer }: Props) => {
  return (
    <EditorStyle>
      <div ref={refContainer}></div>
    </EditorStyle>
  );
};

export default Editor;
