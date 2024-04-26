import React from "react";
import NoteFile from "./NoteFile";
import { NoteData } from "@/lib/types";

type PropType = {
  data: NoteData[];
};

function EditorSidebar({ data }: PropType) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-scroll max-h-full">
        {data.map((note: NoteData) => {
          return <NoteFile key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

export default EditorSidebar;
