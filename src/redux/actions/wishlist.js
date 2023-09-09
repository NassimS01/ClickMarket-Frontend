import axios from "axios";
import { server } from "../../server";

// add product to wishlist
export const addToWishlist = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "addToWishlistRequest",
    });

    const { data } = await axios.post(
      `${server}/user/add-to-wishlist/${productId}`,
      null,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "addToWishlistSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addToWishlistFailed",
      payload: error.response.data.message,
    });
  }
};

// remove product from wishlist
export const removeFromWishlist = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "removeFromWishlistRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/remove-from-wishlist/${productId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "removeFromWishlistSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "removeFromWishlistFailed",
      payload: error.response.data.message,
    });
  }
};

export const toggleProductWishlistStatus = (productId, isInWishlist) => {
  return {
    type: 'toggleProductInWishlist',
    payload: {
      productId,
      isInWishlist,
    },
  };
};

