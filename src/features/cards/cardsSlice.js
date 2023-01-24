import { createSlice, } from "@reduxjs/toolkit";



const options = {
    name: "cards",
    initialState: {
      cards: {}
    },
    reducers: {
      addCard: (state, action) => {
        const { id, front, back,} = action.payload;
        state.cards[id] = {
          id: id,
          front: front,
          back: back
        };
        
      },
     
    },
    
    // extra reducers here
  };

 

 
  
  
export const cardsSlice = createSlice(options);
// selectors
export const selectcards = (state) => state.cards.cards;
// actions + reducers
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;