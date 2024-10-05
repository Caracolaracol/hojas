// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";

// define your extension array
const extensions = [StarterKit, Document, Paragraph, Text, Heading];

const content = "<p>Hello World!</p>";

const TextEditor = () => {
  return (
    <EditorProvider
      extensions={extensions}
      editorProps={{
        attributes: {
          class:
            " prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
        },
      }}
      content={content}
    >
      <FloatingMenu editor={null}></FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
};

export default TextEditor;
