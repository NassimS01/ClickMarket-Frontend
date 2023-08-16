import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import productosReducer from "./reducers/productSlice";
import categoriesReducer from "./reducers/categoriesSlice";
import { wishlistReducer } from "./reducers/wishlist";

const Store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    productos: productosReducer,
    categories: categoriesReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
