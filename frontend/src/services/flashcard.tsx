import axios from "../lib/axios";

export const getFlashcards = async (topicId: number) => {
  try {
    const res = await axios.get(`/flashcards/topic/${topicId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getFlashcard = async (flashcardId: number) => {
  try {
    const res = await axios.get(`/flashcards/${flashcardId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFlashcard = async (id: number) => {
  return await axios.delete(`/flashcards/${id}`);
};

export const createFlashcard = async (topicId: number, data: any) => {
  return await axios.post(`/flashcards/${topicId}`, data);
};

export const createAIFlashcards = async (data: {
  name: string;
  description: string;
}) => {
  const res = await fetch("/api/flashcard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: data.description,
      name: data.name,
    }),
  });
  return await res.json();
};
