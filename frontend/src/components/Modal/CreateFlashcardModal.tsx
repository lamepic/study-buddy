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
import { Plus } from "lucide-react";

function CreateFlashcardModal() {
  return (
    <Dialog>
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
        <form className="mt-3 space-y-3">
          <Input placeholder="Name" />
          <Button className="ml-auto w-full">Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFlashcardModal;
