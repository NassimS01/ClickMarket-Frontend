import axios from "axios";
import { server } from "../../server";

export const addToCart =
  (productId, name, price, img, description, discount) => async (dispatch) => {
    try {
      dispatch({
        type: "addToCartRequest",
      });

      const { data } = await axios.post(
        `${server}/user/add-to-cart/${productId}`,
        null,
        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "addProductFromCart",
        payload: { productId, name, price, img, description, discount },
      });
      dispatch(toggleProductCartStatus(productId, true));
    } catch (error) {
      dispatch({
        type: "addToCartFailed",
        payload: error.response.data.message,
      });
    }
  };

export const removeFromCart = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `${server}/user/remove-from-cart/${productId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "removeProductFromCart",
      payload: productId,
    });
    dispatch(toggleProductCartStatus(productId, false));
  } catch (error) {
    dispatch({
      type: "removeFromCartFailed",
      payload: error.response.data.message,
    });
  }
};

export const toggleProductCartStatus = (productId, isInCart) => {
  return {
    type: "toggleProductInCart",
    payload: {
      productId,
      isInCart,
    },
  };
};

export const increaseCartItemQuantity = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${server}/user/increase-quantity/${productId}`,
      null,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "increaseCartItemQuantity",
      payload: productId,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const decreaseCartItemQuantity = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${server}/user/decrease-quantity/${productId}`,
      null,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "decreaseCartItemQuantity",
      payload: productId,
    });
  } catch (error) {
    console.log("error", error);
  }
};
