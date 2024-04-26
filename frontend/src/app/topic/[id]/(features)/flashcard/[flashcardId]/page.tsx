"use client";

import { useState } from "react";

import useSWR from "swr";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import FlashcardQuestionCard from "@/components/cards/FlashcardQuestionCard";

import { getFlashcard } from "@/services/flashcard";

function FlashcardQuestion() {
  const params = useParams();
  const { data, isLoading, error } = useSWR(params.flashcardId, () =>
    getFlashcard(Number(params.flashcardId))
  );
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    let i = index + 1;
    setIndex(i);
  };

  const handlePrev = () => {
    if (index == 1) setIndex(0);
    let i = index - 1;
    setIndex(i);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full h-[50vh] grid place-items-center">
          <Loader2 size={50} className="animate-spin" />
        </div>
      ) : (
        <>
          <Header title={data.name} />
          <div className="mt-5 space-y-6">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold capitalize">
                {data.name} Questions
              </h1>
              <p className="text-gray-600">
                Test, rate and improve your &quot;{data.name} knowledge&quot;
                with these questions.
              </p>
            </div>
            <div className="w-9/12 mx-auto space-y-2">
              <FlashcardQuestionCard
                question={data.questions[index]["question"]}
                answer={data.questions[index]["answer"]}
              />
              <div className="flex space-x-3">
                <Button
                  className="w-full py-6 bg-slate-200 text-black"
                  variant="outline"
                  onClick={handlePrev}
                  disabled={index === 0}
                >
                  Prev
                </Button>
                <Button
                  className="w-full py-6 bg-slate-200 text-black"
                  variant="outline"
                  onClick={handleNext}
                  disabled={index >= data?.questions.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FlashcardQuestion;
