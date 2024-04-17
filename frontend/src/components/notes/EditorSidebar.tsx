import React from "react";
import NoteFile from "./NoteFile";

function EditorSidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-scroll max-h-full">
        {Array.from({ length: 20 }).map((file, idx) => {
          return <NoteFile key={idx} value={idx} />;
        })}
      </div>
    </div>
  );
}

export default EditorSidebar;
