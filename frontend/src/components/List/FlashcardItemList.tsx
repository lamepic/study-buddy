"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FlashcardItemList() {
  return <FlashCardItem />;
}

const FlashCardItem = () => {
  const params = useParams<{ id: string }>();
  return (
    <div className="flex items-center gap-3">
      <Link
        href={`/flashcard/${params.id}/react`}
        className="w-full border border-gray-500/40 p-5 rounded-md hover:border-gray-500 transition-all duration-150 ease-linear cursor-pointer bg-white"
      >
        <span className="flex items-center space-x-10">
          <span className="text-lg">React</span>
          <span className="text-gray-500">75 Questions</span>
        </span>
      </Link>
      <Trash2 className="text-red-500" />
    </div>
  );
};
