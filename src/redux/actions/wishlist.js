import axios from "axios";
import { server } from "../../server";


export const addToWishlist =
  (productId, name, price, img, description, discount) => async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${server}/user/add-to-wishlist/${productId}`,
        null,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "addProductFromWhislist",
        payload: { productId, name, price, img, description, discount },
      });
      dispatch(toggleProductWishlistStatus(productId, true));
    } catch (error) {
      dispatch({
        type: "addToWishlistFailed",
        payload: error.response.data.message,
      });
    }
  };


export const removeFromWishlist = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `${server}/user/remove-from-wishlist/${productId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "removeProductFromWhislist",
      payload: productId,
    });
    dispatch(toggleProductWishlistStatus(productId, false));
  } catch (error) {
    dispatch({
      type: "removeFromWishlistFailed",
      payload: error.response.data.message,
    });
  }
};

export const toggleProductWishlistStatus = (productId, isInWishlist) => {
  return {
    type: "toggleProductInWishlist",
    payload: {
      productId,
      isInWishlist,
    },
  };
};
