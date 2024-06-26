"use client";

import React from "react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Loader2, Plus } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { createAIFlashcards, createFlashcard } from "@/services/flashcard";
import { CreateFlashcardType } from "@/lib/types";

import { useSWRConfig } from "swr";

type Inputs = {
  name: string;
  description: string;
};

function CreateFlashcardModal({ topicId }: { topicId: string }) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      const aiFlashcards: { result: CreateFlashcardType[] } =
        await createAIFlashcards(data);
      await createFlashcard(+topicId, {
        name: data.name,
        questions: aiFlashcards.result[0],
      });
      mutate(`flashcards-${topicId}`);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-full flex items-center gap-1">
          <span>
            <Plus size="15" />
          </span>
          <span className="font-bold">New</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Flashcard</DialogTitle>
        </DialogHeader>
        <form className="mt-3 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="title" className="text-gray-600">
              Name
            </label>
            <Input
              placeholder="React"
              className="placeholder:text-sm"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="description" className="text-gray-600">
              Description
            </label>
            <Textarea
              placeholder="Easy react questions"
              className="placeholder:text-sm"
              {...register("description", { required: true })}
            />
          </div>
          <Button className="ml-auto w-full" disabled={!isValid || loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFlashcardModal;
