import Link from "next/link";
import Header from "@/components/Header";
import { FEATURES } from "@/lib/constants";
import FeatureCard from "@/components/cards/FeatureCard";

function TopicPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Back" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {FEATURES.map((feature) => (
          <Link href={`${params.id}/${feature.name}`} key={feature.id}>
            <FeatureCard topic={params.id} feature={feature} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default TopicPage;
