import { createSlice } from "@reduxjs/toolkit";
import { AllCategories } from "../../products/filterProducts";

const INITIAL_STATE = {
  categories: AllCategories,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    getCategories: (state) => {
      return state;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
