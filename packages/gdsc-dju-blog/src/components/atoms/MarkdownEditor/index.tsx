import React, { useCallback, useEffect } from 'react';

import { EditorState } from '@codemirror/state';
import { EditorStyle } from '@styles/editor';

import useCodeMirror from '../use-codemirror';

interface Props {
  content: string;
  setContent: (content: string) => void;
}

const Editor: React.FC<Props> = ({ content, setContent }: Props) => {
  const handleChange = useCallback(
    (state: EditorState) => setContent(state.doc.toString()),
    [setContent],
  );
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: content,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    } else {
      // loading editor
    }
  }, [editorView]);

  return (
    <EditorStyle>
      <div ref={refContainer}></div>
    </EditorStyle>
  );
};

export default Editor;
