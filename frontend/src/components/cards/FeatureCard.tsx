"use client";

import { featureType } from "@/lib/types";

type PropType = {
  feature: featureType;
  topic: string;
};

function FeatureCard({ feature }: PropType) {
  return (
    <div className="h-60 w-full border border-slate-300/50 rounded-lg flex flex-col items-center justify-center shadow-sm group cursor-pointer bg-white hover:border-gray-400 transition-all duration-200 ease-linear">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl uppercase tracking-wide">
          {feature.name}
        </h1>
      </div>
    </div>
  );
}

export default FeatureCard;
