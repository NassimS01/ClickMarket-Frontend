import axios from "axios";

export async function getProductsFromDatabase() {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/v2/products/get-all-products"
    );
    return response.data.products;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
}
