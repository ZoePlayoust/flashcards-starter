import { createSlice, } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicsSlice";
const options = {
    name: "quizzes",
    initialState: {
      quizzes: {}
    },
    reducers: {
      addQuiz: (state, action) => {
        const { id, name, topicId, cardIds } = action.payload;
        state.quizzes[id] = {
          id: id,
          name: name,
          topicId: topicId,
          cardIds: cardIds,
        };
      },
     
    },
    // extra reducers here
  };

  

  export const addQuizzForTopicId = (payload) => {
    console.log("quizzesSlice", payload)
    return dispatch => {
         dispatch(addQuiz(payload)).then(dispatch(addQuizId(payload)))}

    }
  
  
export const quizzesSlice = createSlice(options);
// selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;
// actions + reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;