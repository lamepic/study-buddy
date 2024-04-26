"use client";

import React, { useState } from "react";
import ModalLayout from "../Layout/ModalLayout";
import { Button } from "../ui/button";
import { Loader2, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { CreateTopicType } from "@/lib/types";
import { createTopic } from "@/services/topic";

import { useSWRConfig } from "swr";

const OpenButton = (
  <Button className="rounded-xl flex flex-col gap-1 min-h-[7.5rem]">
    <span>
      <Plus />
    </span>
    <span className="font-bold">Create Topic</span>
  </Button>
);

function CreateTopicModal() {
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateTopicType>();

  const onSubmit = async (data: CreateTopicType) => {
    setLoading(true);
    try {
      await createTopic(data);
      mutate("topics");
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <ModalLayout
      button={OpenButton}
      title="Create Topic"
      open={open}
      setOpen={setOpen}
      onSubmit={() => console.log("submitted")}
    >
      <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <label htmlFor="title" className="text-gray-600">
            Name
          </label>
          <Input
            placeholder="Software Engineer"
            className="placeholder:text-sm"
            {...register("name", { required: true })}
          />
        </div>
        <Button className="ml-auto w-full" disabled={!isValid || loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Create
        </Button>
      </form>
    </ModalLayout>
  );
}

export default CreateTopicModal;
