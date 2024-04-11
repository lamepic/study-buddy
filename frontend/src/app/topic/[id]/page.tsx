import Header from "@/components/Header";
import TopicFeatureCard from "@/components/cards/TopicFeatureCard";

function TopicPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Software engineer" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {Array.from({ length: 3 }).map((card, idx) => (
          <TopicFeatureCard key={idx} topic={params.id} feature="flashcard" />
        ))}
      </div>
    </>
  );
}

export default TopicPage;
