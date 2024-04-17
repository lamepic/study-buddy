import Link from "next/link";
import Header from "@/components/Header";
import { FEATURES } from "@/lib/constants";
import FeatureCard from "@/components/cards/FeatureCard";

function TopicPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Software engineer" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {FEATURES.map((feature) => (
          <Link href={`/${feature.name}/${params.id}`} key={feature.id}>
            <FeatureCard topic={params.id} feature={feature} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default TopicPage;
