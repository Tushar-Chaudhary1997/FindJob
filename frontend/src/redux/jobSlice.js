import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
  },
  reducers: {
    setAllsJobs: (state, action) => {
      state.allJobs = action.payload;
    },
  },
});
export const { setAllsJobs } = jobSlice.actions;
export default jobSlice.reducer;
