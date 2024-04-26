import { CreateTopicType } from "@/lib/types";
import axios from "../lib/axios";

export const getTopics = async () => {
  try {
    const res = await axios.get("/topics");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createTopic = async (data: CreateTopicType) => {
  return await axios.post("/topics", data);
};

export const deleteTopic = async (id: number) => {
  return await axios.delete(`/topics/${id}`);
};
