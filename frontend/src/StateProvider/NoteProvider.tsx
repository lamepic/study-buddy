"use client";

import { createContext, useContext, useState } from "react";

type PropTypes = {
  children: React.ReactNode;
};

const NoteContext = createContext<any>(null);

export function NoteProvider({ children }: PropTypes) {
  const [selectedNote, setSelectedNote] = useState(null);

  return (
    <NoteContext.Provider value={{ selectedNote, setSelectedNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export const useNotes = () => useContext(NoteContext);
