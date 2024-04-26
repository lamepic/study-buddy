"use client";

import NoteEditor from "./NoteEditor";
import { Button } from "../ui/button";
import EditorSidebar from "./EditorSidebar";
import { useNotes } from "@/StateProvider/NoteProvider";
import CreateNoteModal from "../Modal/CreateNoteModal";
import { useParams } from "next/navigation";
import useSWR, { mutate } from "swr";
import { getNotes, saveNote } from "@/services/note";
import { Input } from "../ui/input";
import { Loader2, SaveIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function Note() {
  const { selectedNote } = useNotes();
  const params = useParams();
  const { data, isLoading, error, isValidating } = useSWR(
    `notes-${params.id}`,
    () => getNotes(Number(params.id)),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const [savedNoteContent, setSavedNoteContent] = useState<any | null>(null);

  const handleSave = async () => {
    const promise = () =>
      new Promise((resolve) => {
        saveNote(selectedNote.id, {
          name: selectedNote.name,
          content: JSON.stringify(savedNoteContent),
        }).then((res) => {
          resolve(res);
          setSavedNoteContent(null);
          mutate(`note-${selectedNote.id}`);
        });
      });

    toast.promise(promise, {
      loading: "Saving...",
      success: (data) => {
        console.log(data);
        return `Note has been saved`;
      },
      error: "Error",
    });
  };

  if (isLoading || isValidating)
    return (
      <div className="w-full h-[50vh] grid place-items-center">
        <Loader2 size={50} className="animate-spin" />
      </div>
    );

  return (
    <div className="border bg-white rounded-xl shadow">
      <div className="p-3 border-b flex items-center justify-between">
        <p className="font-bold flex-[0.2] text-xl capitalize">
          {selectedNote?.name}
        </p>
        <div className="flex items-center space-x-1">
          {selectedNote && (
            <Button
              variant="outline"
              onClick={handleSave}
              className="flex gap-1 items-center"
              disabled={savedNoteContent === null}
            >
              <span>
                <SaveIcon size="15" />
              </span>
              <span className="font-bold">Save</span>
            </Button>
          )}
          <CreateNoteModal />
        </div>
      </div>
      <div className="flex h-[65vh]">
        <div className="flex-[0.2] h-full">
          <EditorSidebar data={data} />
        </div>
        <div className="flex-[0.8]">
          {selectedNote ? (
            <NoteEditor
              data={selectedNote}
              setSavedNoteContent={setSavedNoteContent}
            />
          ) : (
            <div className="h-4/5 w-full grid place-items-center">
              <div className="space-y-1 text-center">
                <p className="text-2xl font-bold">Idle Space</p>
                <p className="text-sm text-gray-500 font-bold">
                  Create a new Note or Select one to begin
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
