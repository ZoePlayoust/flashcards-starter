import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topics",
  initialState: {
    topics: {'23596': {id: '23596', name: 'patata', icon: 'icon url', quizzIds: []}}}
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
 
      state.push( {quizIds: quizId});
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