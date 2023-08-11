import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./reducers/user";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";

const Store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        cart: cartReducer,
    }
});

export default Store;