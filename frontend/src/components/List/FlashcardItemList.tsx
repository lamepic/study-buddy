"use client";

import { useState } from "react";
import Link from "next/link";

import useSWR, { useSWRConfig } from "swr";
import { useParams } from "next/navigation";
import { Loader2, Trash2 } from "lucide-react";

import { deleteFlashcard, getFlashcards } from "@/services/flashcard";
import { toast } from "sonner";

type FlashcardType = {
  name: string;
  id: number;
  questions: any[];
};

export default function FlashcardItemList() {
  const params = useParams<{ id: string }>();
  const { data, isLoading } = useSWR(`flashcards-${params.id}`, () =>
    getFlashcards(+params.id)
  );

  if (isLoading)
    return (
      <div className="w-full h-[50vh] grid place-items-center">
        <Loader2 size={50} className="animate-spin" />
      </div>
    );

  if (data.flashcards.length === 0) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-bold">You have no Flashcards</p>
          <p className="text-gray-600/80">
            Click on the new button to start creating flashcards
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {data.flashcards.map((card: FlashcardType) => (
        <FlashCardItem key={card.id} id={params.id} data={card} />
      ))}
    </div>
  );
}

const FlashCardItem = ({ id, data }: { id: string; data: FlashcardType }) => {
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    const promise = () =>
      new Promise((resolve) => {
        setLoading(true);
        deleteFlashcard(data.id).then((res) => {
          resolve(res);
          mutate(`flashcards-${id}`);
        });
        setLoading(false);
      });

    toast.promise(promise, {
      loading: "Deleting...",
      success: (data) => {
        return "Flashcard has been deleted";
      },
      error: "Error...",
    });
  };

  return (
    <div className="flex items-center gap-3">
      <Link
        href={`/topic/${id}/flashcard/${data.id}`}
        className="w-full border border-gray-500/40 p-5 rounded-md hover:border-gray-500 transition-all duration-150 ease-linear cursor-pointer bg-white"
      >
        <span className="flex items-center justify-between">
          <span className="text-lg font-semibold capitalize">{data.name}</span>
          <span className="text-gray-500">
            {data.questions.length} Questions
          </span>
        </span>
      </Link>
      {!loading ? (
        <Trash2
          className="text-red-500 cursor-pointer"
          onClick={handleDelete}
        />
      ) : (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
    </div>
  );
};
