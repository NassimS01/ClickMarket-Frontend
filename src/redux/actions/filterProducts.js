import { setFilteredProducts } from "../reducers/productSlice";
import { getProductsFromDatabase } from "../../utils/fetchingData";

export const fetchFilteredProducts = () => async (dispatch) => {
  try {
    const filteredProducts = await getProductsFromDatabase();
    dispatch(setFilteredProducts(filteredProducts));
  } catch (error) {
    console.log("error", error);
  }
};
