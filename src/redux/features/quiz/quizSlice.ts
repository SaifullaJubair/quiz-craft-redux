import { createSlice } from "@reduxjs/toolkit";

type TQuiz = {
  module: string;
  question: string;
  description: string;
  options: string[];
  correctOptions: string[];
};

type TInitialState = {
  quiz: TQuiz[];
};

type TAction = {
  payload: TQuiz[];
};
const initialSate: TInitialState = {
  quiz: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialSate,
  reducers: {
    addQuiz: (state, action: TAction) => {
      state.quiz.push(action.payload);
    },
  },
});

export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
