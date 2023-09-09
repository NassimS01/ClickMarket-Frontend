import axios from "axios";
import { server } from "../server";

export async function getProductsFromDatabase() {
  try {
    const response = await axios.get(
      `${server}/products/get-all-products`
    );
    return response.data.products;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
}
