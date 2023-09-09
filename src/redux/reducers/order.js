import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    orders: [],
};

export const orderReducer = createReducer(initialState, {
    addOrderRequest: (state) => {
        state.loading = true;
    },
    addOrderSuccess: (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
    },
    addOrderFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    removeOrderRequest: (state) => {
        state.loading = true;
    },
    removeOrderSuccess: (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
    },
    removeOrderFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearErrors: (state) => {
        state.error = null;
    },
    clearMessages: (state) => {
        state.successMessage = null;
    },
});
