import { getProductsFromDatabase } from "./fetchingData";

export async function totalProducts() {
  try {
    const products = await getProductsFromDatabase();

    const totalProducts = products.length;

    return totalProducts;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function filterProductsByCategory() {
  try {
    const products = await getProductsFromDatabase();

    const productsFilter = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }

      acc[product.category] = [...acc[product.category], product];

      return acc;
    }, {});

    return productsFilter;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function categories() {
  try {
    const products = await getProductsFromDatabase();

    const categoriesP = products.reduce((acc, category) => {
      if (!acc[category.category]) {
        acc[category.category] = [];
      }
      return acc;
    }, []);

    return categoriesP;
  } catch (error) {
    console.error("Error:", error);
  }
}

