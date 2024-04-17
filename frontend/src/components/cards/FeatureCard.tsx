"use client";

import { featureType } from "@/lib/types";
import { useRouter } from "next/navigation";

type PropType = {
  feature: featureType;
  topic: string;
};

function FeatureCard({ feature }: PropType) {
  const router = useRouter();

  return (
    <div className="h-60 w-full border border-slate-300/50 rounded-lg flex flex-col items-center justify-center shadow-sm group cursor-pointer bg-white">
      <div className="flex flex-col items-center">
        <h1 className="transition-all ease-linear duration-150 group-hover:-translate-y-1.5 font-semibold text-2xl uppercase tracking-wide group-hover">
          {feature.name}
        </h1>
        {/* <p className="text-center transition-all duration-150 ease-linear opacity-0 hidden group-hover:block group-hover:opacity-100 text-sm w-8/12 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          reprehenderit, aut expedita recusandae itaque voluptatum.
        </p> */}
      </div>
    </div>
  );
}

export default FeatureCard;
