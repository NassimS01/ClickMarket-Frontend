import Category from "../pages/Category/Category";
import products from "./dataProducts.json";

export const TotalProducts = products.productos.length;

export const ProductsFilter = products.productos.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});

export const Categories = products.productos.reduce((acc, category) => {
  if (!acc[category.category]) {
    acc[category.category] = category.category;
  }

  return acc;
}, []);



export const AllCategories = Object.entries(Categories).map(([, category]) => category)


