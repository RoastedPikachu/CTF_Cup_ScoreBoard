import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  competitors: [],
};

export const competitorSlice = createSlice({
  name: "competitors",
  initialState,
  reducers: {
    addCompetitor(state, action) {
      state.competitors.push(action.payload);
    },
  },
});

export default competitorSlice.reducer;
