import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../redux/actions/product";
import axios from "axios";
import { TableStyled } from "./ProductsStyled";
import BtnDelete from "../BtnDelete/BtnDelete";
import BtnEdit from "../BtnEdit/BtnEdit";
import { server } from "../../../server";
import { alertConfirmCancel, alertTime } from "../../../utils/alerts";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";
import { CircularProgress } from "@mui/material";

const Products = ({ search }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const productsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios
      .get(`${server}/products/admin-all-products`, { withCredentials: true })
      .then((res) => {
        setData(res.data.products);
      });
  }, []);

  const handleDelete = (id) => {
    alertConfirmCancel("", "¿Deseas eliminar este producto?", "question", "Confirmar", "Cancelar", () => {
      dispatch(deleteProduct(id));
      alertTime(
        "Producto eliminado",
        "success",
        "green",
        "white"
      )
      let interval = setInterval(()=>{
        window.location.reload()
      },2000)
    })

  };

  const totalPages = Math.ceil(data.length / productsPerPage);

  return (
    <>
      {data.length >= 1 ? (
        <div
          id="products"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <TableStyled>
            <div className="containerNames">
              <p style={{ width: "10%" }}>Imagen</p>
              <p style={{ width: "20%" }}>Nombre</p>
              <p style={{ width: "10%" }}>Precio</p>
              <p style={{ width: "30%" }}>Descripción</p>
              <p style={{ width: "20%" }}>Categoría</p>
              <p style={{ width: "10%" }}>Botones</p>
            </div>

            {data
              .filter((product) => {
                return search.toLowerCase() == "todos"
                  ? product
                  : product.name.toLowerCase().includes(search);
              })
              .slice(
                currentPage * productsPerPage,
                (currentPage + 1) * productsPerPage
              )
              .map((product) => (
                <div className="container-info" key={product._id}>
                  <div className="container-img">
                    <img className="img" src={product.images.url} />
                  </div>
                  <p className="name">{product.name}</p>
                  <p className="price">${product.price}</p>
                  <p className="description">{product.description}</p>
                  <p className="category">{product.category}</p>
                  <div className="buttons">
                    <BtnEdit
                      productData={product}
                      value={{ style: { cursor: "pointer" } }}
                    />
                    <BtnDelete product={product} handleDelete={handleDelete} />
                  </div>
                </div>
              ))}
            <div className="paginationButtons">
              <ButtonGlobal
                pagination="true"
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
                }
                disabled={currentPage === 0}
              >
                Anterior
              </ButtonGlobal>
              <ButtonGlobal
                pagination="true"
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    Math.min(prevPage + 1, totalPages - 1)
                  )
                }
                disabled={currentPage === totalPages - 1}
              >
                Siguiente
              </ButtonGlobal>
            </div>
          </TableStyled>
        </div>
      ) : data.length === 0 && status === "success" ? (
        <div>
          <h2 style={{ textAlign: "center" }}>No hay productos para mostrar</h2>
        </div>
      ) : (
        <div
          className="loading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size="60px" style={{ marginTop: "50px" }} />
        </div>
      )}
    </>
  );
};

export default Products;
