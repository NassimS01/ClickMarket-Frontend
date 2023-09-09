import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  productInCartStatus: {},
};

export const cartReducer = createReducer(initialState, {
  addToCartRequest: (state) => {
    state.isLoading = true;
  },
  addToCartSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.message = action.payload;
  },
  addToCartFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  removeFromCartRequest: (state) => {
    state.isLoading = true;
  },
  removeFromCartSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.message = action.payload;
  },
  removeFromCartFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  toggleProductInCart: (state, action) => {
    const { productId, isInCart } = action.payload;
    state.productInCartStatus[productId] = isInCart;
  },

  clearErrors: (state) => {
    state.error = null;
  },

  orderCart: (state) => {
    
  }
});
