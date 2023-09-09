import { ModalStyled } from "../BtnAdd/ModalStyled";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../redux/actions/product";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";
import { alertTime } from "../../../../../backend/utils/alerts";
import { server } from "../../../server";

const EditProductModal = ({ productData, onClose }) => {
  const dispatch = useDispatch();

  // Estados locales para los campos editables
  const [name, setName] = useState(productData && productData.name);
  const [price, setPrice] = useState(productData && productData.price);
  const [discount, setDiscount] = useState(productData && productData.discount);
  const [description, setDescrip] = useState(productData && productData.description);
  const [category, setCategory] = useState(productData && productData.category);
  const [stock, setStock] = useState(productData && productData.stock);
  const [state, setState] = useState(productData && productData.state);

  useEffect(() => {
    // Actualiza los campos del formulario cuando se reciben los nuevos datos del producto a editar
    if (productData) {
      setName(productData.name);
      setPrice(productData.price);
      setDiscount(productData.discount);
      setStock(productData.stock);
      setCategory(productData.category);
      setState(productData.state);
      setDescrip(productData.description);
    }
  }, [productData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      dispatch(editProduct(productData._id, name, price, discount, description, category, stock, state));
      alertTime(
        "Producto actualizado",
        "success",
        "var(--colorSuccess)",
        "white"
      );
      window.location.reload()
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <ModalStyled>
      <div className="modal">
        <h3 className="title">Edita el producto</h3>
        <form onSubmit={handleSubmit} style={{ gap: "20px" }}>
          <div
            className="name-price-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              value={name}
              className="input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="price-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="price">Precio:</label>
            <input
              type="number"
              value={price}
              className="input"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div
            className="discount-stock-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="discount">Descuento:</label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={discount}
              placeholder="Descuento"
              className="input"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div
            className="discount-stock-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={stock}
              className="input"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <div
            className="category-and-state-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="category">Categoría:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={category}
              className="input"
              onChange={(e) => setCategory(e.target.value.toLocaleLowerCase())}
            />
          </div>

          <div
            className="category-state-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="state">Estado:</label>
            <select
              className="input"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>
          <div
            className="discount-stock-container"
            style={{ flexDirection: "row", gap: "10px" }}
          >
            <label htmlFor="descrip">Descripción:</label>
            <textarea
              id="descrip"
              name="descrip"
              value={description}
              className="input"
              onChange={(e) => setDescrip(e.target.value)}
            />
          </div>
          <div className="buttons">
            <ButtonGlobal green type="submit">
              Guardar Producto
            </ButtonGlobal>
            <ButtonGlobal type="button" onClick={onClose}>
              Cerrar
            </ButtonGlobal>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
};


export default EditProductModal;
