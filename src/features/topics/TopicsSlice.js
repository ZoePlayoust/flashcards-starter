import { createSlice } from "@reduxjs/toolkit";
import Topics from "./Topics";

const options = {
  name: "topics",
  initialState: {
    topics: {}
  }
  ,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
     
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
      
    },
    addQuizId: (state, action) =>{
      const quizId= action.payload.id;
      const topicId=action.payload.topicId;
      state.topics[topicId].quizIds.push(quizId)
    },
   
  },
  // extra reducers here
};

export const topicsSlice = createSlice(options);
// selectors
export const selectTopics = (state) => state.topics.topics;
// actions + reducers
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;