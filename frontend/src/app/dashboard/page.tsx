import DashboardLayout from "@/components/Layout/DasboardLayout";
import TopicCard from "@/components/cards/TopicCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Button className="h-full rounded-xl flex flex-col gap-1">
            <span>
              <Plus />
            </span>
            <span className="font-bold">Create Topic</span>
          </Button>
          {Array.from({ length: 10 }).map((item, idx) => {
            return <TopicCard name="nextjs" key={idx} />;
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
