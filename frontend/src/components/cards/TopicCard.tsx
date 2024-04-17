"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

type PropTypes = {
  name: string;
};

function TopicCard({ name }: PropTypes) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className="relative group"
    >
      <Trash2
        size={15}
        className="absolute top-3 right-2 cursor-pointer hidden group-hover:block"
        color="red"
      />
      <Button variant="outline" className="cursor-pointer" asChild>
        <Link
          href={`/topic/${name}`}
          className="w-full h-[7.5rem] rounded-xl bg-white"
        >
          <span className="text-wrap text-center capitalize">{name}</span>
        </Link>
      </Button>
    </motion.div>
  );
}

export default TopicCard;
