"use client";

import { NoteProvider } from "@/StateProvider/NoteProvider";
import Header from "@/components/Header";
import Note from "@/components/notes/Note";

function NotePage() {
  return (
    <>
      <Header title="Back"></Header>
      <div className="mt-5">
        <NoteProvider>
          <Note />
        </NoteProvider>
      </div>
    </>
  );
}

export default NotePage;
