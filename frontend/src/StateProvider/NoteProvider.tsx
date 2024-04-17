"use client";

import { createContext, useContext, useState } from "react";

type PropTypes = {
  children: React.ReactNode;
};

const NoteContext = createContext<any>(null);

export function NoteProvider({ children }: PropTypes) {
  const [selectedNote, setSelectedNote] = useState({
    time: new Date().getTime(),
    blocks: [
      {
        id: String(Math.random()),
        type: "paragraph",
        data: {
          text: "Hello World",
        },
      },
    ],
    version: "2.29.1",
  });

  return (
    <NoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => useContext(NoteContext);
