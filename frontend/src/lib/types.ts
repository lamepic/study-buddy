export type featureType = {
  id: number;
  name: string;
  url: string;
};

export type flashcardQuestions = {
  question: string;
  answer: string;
};

export type SignupType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type CreateTopicType = {
  name: string;
};

export type CreateFlashcardType = {
  name: string;
  questions: { question: string; answer: string }[];
};

export type QuestionType = {
  question: string;
  answer: string;
};

export type NoteData = {
  id?: number;
  name: string;
  content: string;
};
