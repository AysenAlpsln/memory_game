import { createSlice } from "@reduxjs/toolkit";


export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    frameworks: ['angular2','vue','react','grunt','phantomjs','ember','babel','ionic','gulp','meteor','yeoman','yarn','nodejs','bower','browserify'],
    randomFrameworks: [],
  },
});

export default cardSlice.reducer;