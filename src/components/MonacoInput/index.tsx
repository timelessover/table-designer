import React from "react";
import Editor, { EditorProps } from "@monaco-editor/react";
import { initMonaco } from "./config";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { format } from "./format";

export type Monaco = typeof monaco;

interface MonacoInput {
  value: boolean;
}

function MonacoInput(props: EditorProps) {
  React.useEffect(() => {
    initMonaco();
  }, []);

  const onMountHandler = (editor: monaco.editor.IStandaloneCodeEditor) => {
    const currentValue = editor.getValue();
    if (currentValue) {
      format("typescript", currentValue).then((content) => {
        editor.setValue(content);
      });
    }
  };

  return (
    <Editor
      value={props.value}
      language="typescript"
      width="100%"
      height="180vh"
      theme={"monokai"}
      options={{
        readOnly: true,
      }}
      onMount={onMountHandler}
      // options={{
      //   ...props.options,
      //   lineNumbers: 'off',
      //   readOnly: true,
      //   glyphMargin: false,
      //   folding: false,
      //   lineDecorationsWidth: 0,
      //   lineNumbersMinChars: 0,
      //   minimap: {
      //     enabled: false,
      //   },
      //   tabSize: 2,
      //   smoothScrolling: true,
      //   scrollbar: {
      //     verticalScrollbarSize: 5,
      //     horizontalScrollbarSize: 5,
      //     alwaysConsumeMouseWheel: false,
      //   },
      // }}
    />
  );
}

export default MonacoInput;
