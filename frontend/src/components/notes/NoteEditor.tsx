"use client";

import React, { memo, useEffect, useRef } from "react";

import useSWR from "swr";
import EditorJS from "@editorjs/editorjs";
import { getNote, saveNote } from "@/services/note";
import dynamic from "next/dynamic";

type PropType = {
  id: number;
  name: string;
  content: any;
  setSavedContent: () => void;
};

function NoteEditor({
  data,
  setSavedNoteContent,
}: {
  data: PropType;
  setSavedNoteContent: any;
}) {
  const ref = useRef<any>(null);
  const {
    data: noteData,
    isLoading,
    isValidating,
  } = useSWR(`note-${data.id}`, () => getNote(data.id));

  useEffect(() => {
    if (ref.current === null) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Let`s write something awesome",
        data: !isLoading && !isValidating && JSON.parse(noteData.content),

        onChange: async () => {
          let content = await editor.saver.save();
          setSavedNoteContent(content);
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, [data, noteData]);

  return (
    <>
      <div
        id="editorjs"
        className="w-full px-1 py-1 max-h-[65vh] overflow-y-auto"
      ></div>
    </>
  );
}

export default memo(NoteEditor);
