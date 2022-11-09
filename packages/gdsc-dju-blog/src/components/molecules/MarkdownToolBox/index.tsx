import React, { useMemo } from 'react';

import styled from 'styled-components';

import IconButton from '@atoms/IconButton';
import { EditorView } from '@codemirror/view';

const ToolBoxSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
`;

type Props = {
  editorView: EditorView;
};

const MarkdownToolBox = ({ editorView }: Props) => {
  const doc = editorView.state;
  const selectionRange = doc.selection.ranges[0];
  const selection = doc.doc.slice(selectionRange.from, selectionRange.to);
  const replaceSelection = useMemo(() => {
    return {
      heading: () =>
        editorView.dispatch(doc.replaceSelection(`# ${selection}`)),
      bold: () => editorView.dispatch(doc.replaceSelection(`**${selection}**`)),
      italic: () => editorView.dispatch(doc.replaceSelection(`*${selection}*`)),
      strike: () =>
        editorView.dispatch(doc.replaceSelection(`~~${selection}~~`)),
      quote: () => editorView.dispatch(doc.replaceSelection(`> ${selection}`)),
      ul: () => editorView.dispatch(doc.replaceSelection(`- ${selection}`)),
      ol: () => editorView.dispatch(doc.replaceSelection(`1. ${selection}`)),
      code: () => editorView.dispatch(doc.replaceSelection(`\`${selection}\``)),
      link: () =>
        editorView.dispatch(
          doc.replaceSelection(`[${selection}](url을 입력해주세요)`),
        ),
      image: () =>
        editorView.dispatch(
          doc.replaceSelection(`![${selection}](url을 입력해주세요)`),
        ),
    };
  }, [doc]);

  const toolKeys = Object.keys(replaceSelection) as Array<
    keyof typeof replaceSelection
  >;

  return (
    <ToolBoxSection>
      {toolKeys.map((toolKey) => {
        return (
          <IconButton
            onClick={replaceSelection[toolKey]}
            icon={toolKey}
            key={toolKey}
          />
        );
      })}
    </ToolBoxSection>
  );
};

export default MarkdownToolBox;
