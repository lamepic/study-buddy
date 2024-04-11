"use client";

import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function FlashcardItemList() {
  return <FlashCardItem />;
}

const FlashCardItem = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/"
        className="w-full border border-gray-500/10 p-3 rounded-md hover:border-gray-500/40 transition-all duration-150 ease-linear cursor-pointer"
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
