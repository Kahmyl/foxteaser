import {
    ADD_RESULT_TYPE,
    CLEAR_RESULT_TYPE,
    SET_QUIZ_TYPE,
  } from "../actionTypes";
  
  const initialState: { questions: any; result: any } = {
    questions: [],
    result: [],
  };
  
  export const quiz = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_QUIZ_TYPE:
        return {
          ...state,
          questions: action.questions,
        };
      case ADD_RESULT_TYPE:
        const existingIndex = state.result.findIndex(
          (item: any) => item.quizId === action.data.quizId
        );
        if (existingIndex >= 0) {
          return {
            ...state,
            result: state.result.map((item: any) =>
              item.quizId === action.data.quizId
                ? {
                    item: action.data,
                  }
                : item
            ),
          };
        } else {
          return {
            ...state,
            result: state.result.concat({
              ...action.data,
            }),
          };
        }
      case CLEAR_RESULT_TYPE:
        return initialState;
      default:
        return state;
    }
  };