import { ADD_RESULT_TYPE, SET_QUIZ_TYPE } from "../actionTypes";
import { Dispatch } from "redux";
import { getQuestions } from "../../services/requests";
import { shuffle } from "../../helpers/shuffle";

export const setQuizType = (questions: any[]) => ({
  type: SET_QUIZ_TYPE,
  questions,
});

export const addResultType = (data: object) => ({
  type: ADD_RESULT_TYPE,
  data,
});

export const loadQuiz = (categories: string, difficulty: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await getQuestions(categories, difficulty);
      const questions = response.data;
      const result = await questions.map((p: any) => {
        p.incorrectAnswers.push(p.correctAnswer);
        p.incorrectAnswers = shuffle(p.incorrectAnswers);
        return p;
      });
      dispatch(setQuizType(result));
    } catch (err: any) {
      throw err;
    }
  };
};