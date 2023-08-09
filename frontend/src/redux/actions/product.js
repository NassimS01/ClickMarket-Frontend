import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct =
    (
        name,
        description,
        category,
        price,
        discount,
        stock,
        images
    ) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: "productCreateRequest",
                });

                const { data } = await axios.post(
                    `${server}/products/create-product`,
                    name,
                    description,
                    category,
                    price,
                    discount,
                    stock,
                    images,
                );
                dispatch({
                    type: "productCreateSuccess",
                    payload: data.product,
                });
            } catch (error) {
                dispatch({
                    type: "productCreateFail",
                    payload: error.response.data.message,
                });
            }
        };

// get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: "getAllProductsRequest",
        });

        const { data } = await axios.get(`${server}/products/get-all-products`);
        dispatch({
            type: "getAllProductsSuccess",
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: "getAllProductsFailed",
            payload: error.response.data.message,
        });
    }
};

// edit product
export const editProduct = (id, updatedData) => async (dispatch) => {
    try {
        dispatch({
            type: "editProductRequest",
        });
        const { data } = await axios.put(
            `${server}/products/edit-product/${id}`,
            updatedData,
            {
                withCredentials: true,
            }
        );
        dispatch({
            type: "editProductSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "editProductFailed",
            payload: error.response.data.message,
        });
    }
};

// delete product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "deleteProductRequest",
        });

        const { data } = await axios.delete(
            `${server}/products/delete-product/${id}`,
            {
                withCredentials: true,
            }
        );

        dispatch({
            type: "deleteProductSuccess",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "deleteProductFailed",
            payload: error.response.data.message,
        });
    }
};