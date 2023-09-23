import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userWishlist: [],
  userCart: [],
  userOrder: [],
  userWishListProductStatus: {},
};

export const userReducer = createReducer(initialState, {
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: action.payload,
    };
  },
  LoadUserFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  },


  updateUserInfoRequest: (state) => {
    state.loading = true;
  },
  updateUserInfoSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.successMessage = action.successMessage;
  },
  updateUserInfoFailed: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },


  getAllUsersRequest: (state) => {
    state.usersLoading = true;
  },
  getAllUsersSuccess: (state, action) => {
    state.usersLoading = false;
    state.users = action.payload;
  },
  getAllUsersFailed: (state, action) => {
    state.usersLoading = false;
    state.error = action.payload;
  },

  getUserWishlistRequest: (state) => {
    state.isLoading = true;
  },
  getUserWishlistSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.userWishlist = action.payload;
  },
  getUserWishlistFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  addProductFromWhislist: (state, action) => {
    state.userWishlist = [...state.userWishlist, action.payload];
  },

  removeProductFromWhislist: (state, action) => {
    state.userWishlist = state.userWishlist.filter(
      (product) => product._id !== action.payload
    );
  },

  productInWishlistStatus: (state, action) => {
    const { productId, status } = action.payload;
    state.productInWishlistStatus[productId] = status;
  },


  getUserCartRequest: (state) => {
    state.isLoading = true;
  },
  getUserCartSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.userCart = action.payload;

    return state;
  },
  getUserCartFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  addProductFromCart: (state, action) => {
    state.userCart = [...state.userCart, action.payload];
  },

  removeProductFromCart: (state, action) => {
    state.userCart = state.userCart.filter(
      (product) => product._id !== action.payload
    );
  },

  increaseCartItemQuantity: (state, action) => {
    const productId = action.payload;
    const productIndex = state.userCart.findIndex(
      (item) => item._id === productId
    );

    if (productIndex !== -1) {
      const updatedUserCart = [...state.userCart];
      updatedUserCart[productIndex] = {
        ...updatedUserCart[productIndex],
        quantity: updatedUserCart[productIndex].quantity + 1,
      };
      return {
        ...state,
        userCart: updatedUserCart,
      };
    }
    return state;
  },

  decreaseCartItemQuantity: (state, action) => {
    const productId = action.payload;
    const productIndex = state.userCart.findIndex(
      (item) => item._id === productId
    );

    if (productIndex !== -1) {
      const updatedUserCart = [...state.userCart];
      updatedUserCart[productIndex] = {
        ...updatedUserCart[productIndex],
        quantity: updatedUserCart[productIndex].quantity - 1,
      };
      return {
        ...state,
        userCart: updatedUserCart,
      };
    }
    return state;
  },

  removeAllFromCart: (state) => {
    state.userCart = [];
  },

  clearErrors: (state) => {
    state.error = null;
  },

  clearMessages: (state) => {
    state.successMessage = null;
  },


  getUserOrderRequest: (state) => {
    state.isLoading = true;
  },
  getUserOrderSuccess: (state, action) => {
    state.isLoading = false;
    state.success = true;
    state.userOrder = action.payload;
  },
  getUserOrderFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
});
