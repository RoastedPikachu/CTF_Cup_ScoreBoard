import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  competitors: [],
};

export const competitorSlice = createSlice({
  name: "competitors",
  initialState,
  reducers: {
    addCompetitor(state, action) {
      console.log("hhghghg");
      state.competitors.push(action.payload);
    },
  },
});

export default competitorSlice.reducer;
