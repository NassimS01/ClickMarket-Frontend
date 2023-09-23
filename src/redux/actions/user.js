import axios from "axios";
import { server } from "../../server";
import { toggleProductCartStatus } from "./cart";
import { toggleProductWishlistStatus } from "./wishlist";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};


export const updateUserInformation =
  (name, email, oldPassword, newPassword, repeatNewPassword) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          name,
          email,
          oldPassword,
          newPassword,
          repeatNewPassword,
        },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
        successMessage: "Usuario actualizado correctamente!",
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailed",
        payload: error.response.data.message,
      });
    }
  };


export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailed",
      payload: error.response.data.message,
    });
  }
};


export const getUserWishlist = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserWishlistRequest",
    });

    const { data } = await axios.get(`${server}/user/get-user-wishlist`, {
      withCredentials: true,
    });

    dispatch({
      type: "getUserWishlistSuccess",
      payload: data.userWishlist,
    });

    data.userWishlist.forEach((product) => {
      dispatch(toggleProductWishlistStatus(product._id, true));
    });
  } catch (error) {
    dispatch({
      type: "getUserWishlistFailed",
      payload: error.response.data.message,
    });
  }
};

export const getUserCart = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserCartRequest",
    });

    const { data } = await axios.get(`${server}/user/get-user-cart`, {
      withCredentials: true,
    });

    dispatch({
      type: "getUserCartSuccess",
      payload: data.userCart,
    });

    data.userCart.forEach((product) => {
      dispatch(toggleProductCartStatus(product._id, true));
    });
  } catch (error) {
    dispatch({
      type: "getUserCartFailed",
      payload: error.response.data.message,
    });
  }
};


export const getUserOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: "getUserOrderRequest",
    });

    const { data } = await axios.get(`${server}/user/get-user-order`, {
      withCredentials: true,
    });

    dispatch({
      type: "getUserOrderSuccess",
      payload: data.userOrder,
    });

    data.userOrder.forEach((product) => {
      dispatch(toggleProductCartStatus(product._id, true));
    });
  } catch (error) {
    dispatch({
      type: "getUserOrderFailed",
      payload: error.response.data.message,
    });
  }
};


export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserRequest",
    });

    const { data } = await axios.delete(`${server}/user/delete-user/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "deleteUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteUserFailed",
      payload: error.response.data.message,
    });
  }
};


export const activeUserForAdmin = (id, updatedData) => async (dispatch) => {
  try {
    dispatch({
      type: "enableUserRequest",
    });

    const { data } = await axios.put(
      `${server}/user/active-user-for-admin/${id}`,
      { active: updatedData },
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "enableUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "enableUserFailed",
      payload: error.response.data.message,
    });
  }
};


export const activeUser = (id, updatedData) => async (dispatch) => {
  try {
    dispatch({
      type: "enableUserRequest",
    });

    const { data } = await axios.put(
      `${server}/user/active-user/${id}`,
      { active: updatedData },
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "enableUserSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "enableUserFailed",
      payload: error.response.data.message,
    });
  }
};

export const removeAllFromCart = () => ({
  type: "removeAllFromCart",
});
