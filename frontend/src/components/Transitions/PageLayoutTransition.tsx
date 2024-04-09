"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

function PageLayoutTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 0.2,
          ease: "easeIn",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageLayoutTransition;
