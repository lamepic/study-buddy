"use client";

import { useState } from "react";
import { useSWRConfig } from "swr";

import { toast } from "sonner";
import { useParams } from "next/navigation";
import { deleteNote } from "@/services/note";
import { Loader2, Trash2 } from "lucide-react";
import { useNotes } from "@/StateProvider/NoteProvider";

type PropType = {
  id?: number;
  name: string;
  content: string;
};

function NoteFile(props: { note: PropType }) {
  const params = useParams();
  const { mutate } = useSWRConfig();
  const { name, content, id } = props.note;
  const { setSelectedNote, selectedNote } = useNotes();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    const promise = () =>
      new Promise((resolve) => {
        setLoading(true);
        deleteNote(id as number).then(async (res) => {
          resolve(res);
          if (selectedNote?.id === id) setSelectedNote(null);
          await mutate(`notes-${params.id}`);
          setLoading(false);
        });
      });

    toast.promise(promise, {
      loading: "Deleting...",
      success: (data) => {
        console.log(data);
        return `Note has been deleted`;
      },
      error: "Error",
    });
  };

  return (
    <div className="border-b border-gray-200/50 p-1 flex items-center group">
      <button
        onClick={() => {
          setSelectedNote({ id, name, content: JSON.parse(content) });
        }}
        className="text-sm p-2 w-full cursor-pointer hover:bg-slate-100 rounded-md transition-all duration-150 text-start group"
      >
        {name}
      </button>
      {!loading ? (
        <Trash2
          size={20}
          className="text-red-500 hidden group-hover:block cursor-pointer"
          onClick={handleDelete}
        />
      ) : (
        <Loader2 size={20} className="animate-spin" />
      )}
    </div>
  );
}

export default NoteFile;
