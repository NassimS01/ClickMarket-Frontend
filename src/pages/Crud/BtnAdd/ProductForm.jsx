import { useState } from "react";
import axios from "axios";
import { ModalStyled } from "./ModalStyled";
import PropTypes from 'prop-types';

const ProductForm = ({ onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    img: "",
    descrip: "",
    fav: "true",
    category: "",
    stock: 0,
    state: "true",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si el campo es fav o state, convertir el valor a booleano
    const newValue =
      name === "fav" || name === "state" ? value === "true" : value;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3900/api/save",
        product
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <ModalStyled>
      <h3>Agrega un Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Imagen URL:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={product.img}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="descrip">Descripción:</label>
          <textarea
            id="descrip"
            name="descrip"
            value={product.descrip}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fav">Favorito:</label>
          <select
            id="fav"
            name="fav"
            value={product.fav.toString()}
            onChange={handleChange}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            name="state"
            value={product.state.toString()}
            onChange={handleChange}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit">Guardar Producto</button>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </form>
    </ModalStyled>
  );
};

ProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProductForm;
