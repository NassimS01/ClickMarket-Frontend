import axios from "axios";
import { server } from "../../server";

// load user
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

//user update information
export const updateUserInformation =
    (name, email, password) => async (dispatch) => {
        try {
            dispatch({
                type: "updateUserInfoRequest",
            });

            const { data } = await axios.put(
                `${server}/user/update-user-info`,
                {
                    email,
                    password,
                    name,
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
            });
        } catch (error) {
            dispatch({
                type: "updateUserInfoFailed",
                payload: error.response.data.message,
            });
        }
    };

// get all users --- admin
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