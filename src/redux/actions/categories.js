import { filterProductsByCategory } from "../../utils/filterProducts";
import { setFilteredCategories } from "../reducers/categoriesSlice";

export const fetchFilteredCategories = () => async (dispatch) => {
  try {
    const filteredCategories = await filterProductsByCategory();
    dispatch(setFilteredCategories(filteredCategories));
  } catch (error) {
    console.log("error", error);
  }
};
