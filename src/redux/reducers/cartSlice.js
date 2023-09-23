import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userCart: [], 
  },
  reducers: {
    updateSubtotal: (state, action) => {
      const { productId, subtotal } = action.payload;
      const updatedCart = state.userCart.map((product) =>
        product._id === productId ? { ...product, subtotal } : product
      );
      state.userCart = updatedCart;
    },
    removeProductFromCart: (state, action) => {
    },
  },
});

export const { updateSubtotal, removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
