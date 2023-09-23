import axios from "axios";
import { server } from "../../server";

export const addOrder = (cartItems) => async (dispatch) => {
  try {
    dispatch({
      type: "addOrderRequest",
    });
    const { data } = await axios.post(
      `${server}/stripe/create-checkout-session`,
      {
        cartItems,
      },
      {
        withCredentials: true,
      }
    );
    window.location = data.url;

    dispatch({
      type: "addOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addOrderFailed",
      payload: error.response.data.message,
    });
  }
};

export const removeOrder = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: "removeOrderRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/remove-order/${orderId}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "removeOrderSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "removeOrderFailed",
      payload: error.response.data.message,
    });
  }
};
