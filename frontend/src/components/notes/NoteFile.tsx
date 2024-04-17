"use client";

import { useNotes } from "@/StateProvider/NoteProvider";

type PropType = {
  value: string | number;
};

function NoteFile({ value }: PropType) {
  const { setSelectedNote } = useNotes();

  const content = {
    time: new Date().getTime(),
    blocks: [
      {
        id: String(Math.random()),
        type: "paragraph",
        data: {
          text: value,
        },
      },
    ],
    version: "2.29.1",
  };

  return (
    <div className="border-b border-gray-200/50 p-1">
      <button
        onClick={() => {
          console.log(`clicked note ${value}`);
          setSelectedNote(content);
        }}
        className="text-sm p-2 w-full cursor-pointer hover:bg-slate-100 rounded-md transition-all duration-150 text-start"
      >
        {value}
      </button>
    </div>
  );
}

export default NoteFile;
