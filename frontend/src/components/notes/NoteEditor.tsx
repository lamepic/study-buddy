"use client";

import React, { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

function NoteEditor({ data }: { data: any }) {
  const ref = useRef<any>(null);

  // useEffect(() => {
  //   if (ref.current === null) {
  //     const editor = new EditorJS({
  //       holder: "editorjs",
  //       onReady: () => {
  //         // ref.current = editor;
  //       },
  //       autofocus: true,
  //       data: data,
  //       onChange: async () => {
  //         let content = await editor.saver.save();
  //         console.log(content);
  //       },
  //     });

  //     ref.current = editor;
  //   }

  //   return () => {
  //     if (ref.current && ref.current.destroy) {
  //       ref.current.destroy();
  //       ref.current = null;
  //     }
  //   };
  // }, [data]);

  return (
    <>
      <div
        id="editorjs"
        className="w-full p-5 max-h-[65vh] overflow-y-scroll"
      ></div>
    </>
  );
}

export default memo(NoteEditor);
