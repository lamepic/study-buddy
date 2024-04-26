"use client";

import React from "react";
import useSWR from "swr";

import CreateTopicModal from "../Modal/CreateTopicModal";
import TopicCard from "../cards/TopicCard";

import { getTopics } from "@/services/topic";

type TopicType = {
  id: number;
  name: string;
};

function TopicList() {
  const { data, error, isLoading } = useSWR("topics", getTopics);

  if (isLoading) return null;

  return (
    <div className="max-w-2xl mx-auto mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <CreateTopicModal />
        {data?.topics.map((topic: TopicType) => {
          return <TopicCard name={topic.name} id={topic.id} key={topic.id} />;
        })}
      </div>
    </div>
  );
}

export default TopicList;
