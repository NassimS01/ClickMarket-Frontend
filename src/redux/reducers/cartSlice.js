import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userCart: [], // Tu array de productos en el carrito
  },
  reducers: {
    updateSubtotal: (state, action) => {
      const { productId, subtotal } = action.payload;
      const updatedCart = state.userCart.map((product) =>
        product._id === productId ? { ...product, subtotal } : product
      );
      state.userCart = updatedCart;
    },
    // ... otras reducers si las tienes
  },
});

export const { updateSubtotal } = cartSlice.actions;
export default cartSlice.reducer;
