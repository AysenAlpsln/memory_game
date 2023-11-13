import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    frameworks: ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'],
    score : 0,
    matchCount: 0,
  },
  reducers: {
    addScore: (state, action) => {
      state.score = state.score + action.payload;
      state.matchCount = state.matchCount +1;
    },
    deleteScore: (state, action) => {
      state.score = state.score - action.payload;
    }
  }
});

export const { addScore, deleteScore } = cardSlice.actions;
export default cardSlice.reducer;