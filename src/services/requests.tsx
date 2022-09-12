import api from "./api";

export const getQuestions = (categories: string, difficulty: string) => {
  return api.get(
    `/questions?categories=${categories}&limit=${5}&difficulty=${difficulty}`
  );
};