import React, { useMemo } from 'react';

import { EditorView } from '@codemirror/view';

type Props = {
  editorView: EditorView;
};

const MarkdownToolBox = ({ editorView }: Props) => {
  const doc = editorView.state;
  const selectionRange = doc.selection.ranges[0];
  const selection = doc.doc.slice(selectionRange.from, selectionRange.to);
  const replaceSelection = useMemo(() => {
    return {
      bold: () => editorView.dispatch(doc.replaceSelection(`**${selection}**`)),
      italic: () => editorView.dispatch(doc.replaceSelection(`*${selection}*`)),
      strike: () =>
        editorView.dispatch(doc.replaceSelection(`~~${selection}~~`)),
      code: () => editorView.dispatch(doc.replaceSelection(`\`${selection}\``)),
      link: () =>
        editorView.dispatch(
          doc.replaceSelection(`[${selection}](url을 입력해주세요)`),
        ),
      image: () =>
        editorView.dispatch(
          doc.replaceSelection(`![${selection}](url을 입력해주세요)`),
        ),
      quote: () => editorView.dispatch(doc.replaceSelection(`> ${selection}`)),
      ul: () => editorView.dispatch(doc.replaceSelection(`- ${selection}`)),
      ol: () => editorView.dispatch(doc.replaceSelection(`1. ${selection}`)),
      h1: () => editorView.dispatch(doc.replaceSelection(`# ${selection}`)),
      h2: () => editorView.dispatch(doc.replaceSelection(`## ${selection}`)),
      h3: () => editorView.dispatch(doc.replaceSelection(`### ${selection}`)),
      h4: () => editorView.dispatch(doc.replaceSelection(`#### ${selection}`)),
      h5: () => editorView.dispatch(doc.replaceSelection(`##### ${selection}`)),
      h6: () =>
        editorView.dispatch(doc.replaceSelection(`###### ${selection}`)),
    };
  }, [doc]);

  const toolKeys = Object.keys(replaceSelection) as Array<
    keyof typeof replaceSelection
  >;

  return (
    <div>
      {toolKeys.map((toolKey) => {
        return (
          <button onClick={replaceSelection[toolKey]} key={toolKey}>
            {toolKey}
          </button>
        );
      })}
    </div>
  );
};

export default MarkdownToolBox;
