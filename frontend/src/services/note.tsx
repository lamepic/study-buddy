import { NoteData } from "@/lib/types";
import axios from "../lib/axios";

export const getNotes = async (topicId: number) => {
  try {
    const res = await axios.get(`/notes/topic/${topicId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getNote = async (noteId: number) => {
  try {
    const res = await axios.get(`/notes/${noteId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createNote = async (data: { name: string }, topicId: number) => {
  try {
    const noteData = {
      ...data,
      content: JSON.stringify({
        time: new Date().getTime(),
        blocks: [
          {
            id: String(Math.random()),
            type: "paragraph",
            data: {
              text: "",
            },
          },
        ],
        version: "2.29.1",
      }),
    };
    const res = await axios.post(`/notes/${topicId}`, noteData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const saveNote = async (noteId: number, data: NoteData) => {
  try {
    const res = await axios.put(`/notes/${noteId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (noteId: number) => {
  return await axios.delete(`/notes/${noteId}`);
};
