"use client";

import React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useSWRConfig } from "swr";

import { deleteTopic } from "@/services/topic";
import { toast } from "sonner";
// import { useStateProviderContext } from "@/StateProvider/StateProvider";

type PropTypes = {
  id: number;
  name: string;
};

function TopicCard({ name, id }: PropTypes) {
  const { mutate } = useSWRConfig();
  // const { setSelectedTopic } = useStateProviderContext();

  const handleDelete = async () => {
    const promise = () =>
      new Promise((resolve) => {
        deleteTopic(id).then((res) => {
          resolve(res);
          mutate("topics");
        });
      });
    toast.promise(promise, {
      loading: "Deleting...",
      success: (data) => {
        return `Topic has been deleted!`;
      },
      error: "Error",
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      <Trash2
        onClick={handleDelete}
        size={15}
        className="absolute top-3 right-2 cursor-pointer hidden group-hover:block"
        color="red"
      />
      <Button
        variant="outline"
        className="cursor-pointer"
        // onClick={() => setSelectedTopic(name)}
        asChild
      >
        <Link
          href={`/topic/${id}`}
          className="w-full h-[7.5rem] rounded-xl bg-white"
        >
          <span className="text-wrap text-center capitalize">{name}</span>
        </Link>
      </Button>
    </motion.div>
  );
}

export default TopicCard;
