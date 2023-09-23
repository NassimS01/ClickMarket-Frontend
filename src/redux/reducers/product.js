import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

export const productReducer = createReducer(initialState, {
    productCreateRequest: (state) => {
        state.isLoading = true;
    },
    productCreateSuccess: (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.success = true;
    },
    productCreateFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },



    // get all products
    getAllProductsRequest: (state) => {
        state.isLoading = true;
    },
    getAllProductsSuccess: (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload;
    },
    getAllProductsFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
    },


    editProductRequest: (state) => {
        state.isLoading = true;
    },
    editProductSuccess: (state, action) => {
        state.isLoading = false;
        state.productToEdit = action.payload;
    },
    editProductFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    }
});