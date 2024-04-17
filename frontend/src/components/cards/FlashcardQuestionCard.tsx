"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

type PropType = {
  question: string;
  answer: string;
};

function FlashcardQuestionCard({ question, answer }: PropType) {
  const [showAnswer, setShowAnser] = useState<boolean>(false);

  return (
    <div className="border border-gray-200 rounded-md flex flex-col items-center justify-center h-[55vh] relative">
      <div className="w-11/12 text-center relative h-full flex flex-col items-center justify-center">
        {!showAnswer ? (
          <div>
            <p className="font-bold text-3xl">{question}</p>
          </div>
        ) : (
          <div>
            <p className="text-xl">{answer}</p>
          </div>
        )}
      </div>
      <Button
        className="text-gray-500 absolute bottom-5"
        variant="link"
        onClick={() => setShowAnser(!showAnswer)}
      >
        {!showAnswer ? "Click to Reveal Answer" : "Hide the Answer"}
      </Button>
    </div>
  );
}

export default FlashcardQuestionCard;
