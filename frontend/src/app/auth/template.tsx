import React from "react";
import PageLayoutTransition from "@/components/Transitions/PageLayoutTransition";

function template({ children }: { children: React.ReactNode }) {
  return <PageLayoutTransition>{children}</PageLayoutTransition>;
}

export default template;
