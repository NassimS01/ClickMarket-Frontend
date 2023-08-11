import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    filteredCategories: {},
  },
  reducers: {
    setFilteredCategories: (state, action) => {
      state.filteredCategories = action.payload;
    },
  },
});

export const { setFilteredCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
