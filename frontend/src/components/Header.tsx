"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
// import { useStateProviderContext } from "@/StateProvider/StateProvider";

type PropType = {
  title?: string;
  children?: React.ReactNode;
};

function Header({ title, children }: PropType) {
  const router = useRouter();
  // const { selectedTopic } = useStateProviderContext();

  return (
    <div className="mt-5 bg-gray-300/30 p-2 rounded-md flex items-center justify-between capitalize">
      <Button
        variant="ghost"
        className="flex items-center gap-3"
        onClick={() => router.back()}
      >
        <ArrowLeft size={20} />
        <span className="text-lg capitalize">{title}</span>
      </Button>
      <div>{children}</div>
    </div>
  );
}

export default Header;
