import { useState, useEffect } from "react";
import axios from "axios";
import { TableStyled } from "./ProductsStyled";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnEdit from "../BtnEdit/BtnEdit";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetchProducts();
    /// Conexión a los eventos SSE del servidor para agregar o editar un producto
    const eventSource = new EventSource(
      "http://localhost:3900/api/products-sse"
    );
    eventSource.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      const updatedProductId = eventData._id;

      setProducts((prevProducts) =>
        prevProducts.some((product) => product._id === updatedProductId)
          ? prevProducts.map((product) =>
              product._id === updatedProductId ? eventData : product
            )
          : [...prevProducts, eventData]
      );
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:3900/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error fetching products:", error);
      });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3900/api/product/${id}`
      );
      console.log(response.data);
      // actualiza
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      alert(`Producto eliminado correctamente.`);
    } catch (error) {
      alert("Error al eliminar el producto. Inténtalo nuevamente.");
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      {products.length >= 1 ? (
        <div
          id="products"
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <TableStyled>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Categoría</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.descrip}</td>
                  <td>{product.category}</td>
                  <td style={{ display: "flex" }}>
                    <BtnDelete product={product} handleDelete={handleDelete} />
                    <BtnEdit productData={product} />
                  </td>
                </tr>
              ))}
            </tbody>
          </TableStyled>
        </div>
      ) : products.length === 0 && status === "success" ? (
        <div>
          <h2 style={{ textAlign: "center"}}>No hay productos para mostrar</h2>
        </div>
      ) : (
        <div className="loading">
          <h2 style={{ textAlign: "center"}}>Cargando....</h2>
          <p style={{ textAlign: "center"}}>Espere mientras carga el contenido</p>
        </div>
      )}
    </>
  );
};

export default Products;
