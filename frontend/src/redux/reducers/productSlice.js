import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProducts } = productSlice.actions;
export default productSlice.reducer;
