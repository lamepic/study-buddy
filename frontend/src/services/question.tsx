import axios from "../lib/axios";

export const getQuestions = async (flashcardId: number) => {
  try {
    const res = await axios.get(`/questions/${flashcardId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
