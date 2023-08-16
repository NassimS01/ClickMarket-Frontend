import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    productInWishlistStatus: {},
};

export const wishlistReducer = createReducer(initialState, {
    addToWishlistRequest: (state) => {
        state.isLoading = true;
    },
    addToWishlistSuccess: (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload;
    },
    addToWishlistFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    removeFromWishlistRequest: (state) => {
        state.isLoading = true;
    },
    removeFromWishlistSuccess: (state, action) => {
        state.isLoading = false;
        state.success = true;
        state.message = action.payload;
    },
    removeFromWishlistFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    toggleProductInWishlist: (state, action) => {
        const { productId, isInWishlist } = action.payload;
        state.productInWishlistStatus[productId] = isInWishlist;
    },


    clearErrors: (state) => {
        state.error = null;
    },
});