import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import productosReducer from "./reducers/productSlice";
import categoriesReducer from "./reducers/categoriesSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    cart: cartReducer,
    productos: productosReducer,
    categories: categoriesReducer,
  },
});

export default Store;
