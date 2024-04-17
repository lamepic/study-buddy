"use client";

import React from "react";
import Header from "@/components/Header";
import FlashcardQuestionCard from "@/components/cards/FlashcardQuestionCard";
import { Button } from "@/components/ui/button";

function FlashcardQuestion() {
  return (
    <>
      <Header title="React" />
      <div className="mt-5 space-y-6">
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold">React Questions</h1>
          <p className="text-gray-600">
            Test, rate and improve your JavaScript knowledge with these
            questions.
          </p>
        </div>
        <div className="w-9/12 mx-auto space-y-2">
          <FlashcardQuestionCard
            question="What is the difference between `null` and `undefined`?"
            answer="The null is an assignment value. It can be assigned to  a variableas a representation of no value. But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value."
          />
          <div className="flex space-x-3">
            <Button
              className="w-full py-6 bg-slate-200 text-black"
              variant="outline"
            >
              Prev
            </Button>
            <Button
              className="w-full py-6 bg-slate-200 text-black"
              variant="outline"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashcardQuestion;
