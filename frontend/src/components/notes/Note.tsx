"use client";

import NoteEditor from "./NoteEditor";
import { Button } from "../ui/button";
import EditorSidebar from "./EditorSidebar";
import { useNotes } from "@/StateProvider/NoteProvider";
import CreateNoteModal from "../Modal/CreateNoteModal";

function Note() {
  const { selectedNote } = useNotes();
  return (
    <div className="border bg-white rounded-xl shadow">
      <div className="p-3 border-b flex justify-between items-center">
        <p className="font-bold">
          {/* <Input value="New Note" className="border-none outline-none" /> */}
        </p>
        <div>
          <CreateNoteModal />
        </div>
      </div>
      <div className="flex h-[65vh]">
        <div className="flex-[0.2] h-full">
          <EditorSidebar />
        </div>
        <div className="flex-[0.8]">
          {selectedNote ? <NoteEditor data={selectedNote} /> : <p>Add note</p>}
        </div>
      </div>
    </div>
  );
}

export default Note;
