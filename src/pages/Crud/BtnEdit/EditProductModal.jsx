import { ModalStyled } from "../BtnAdd/ModalStyled";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";


const EditProductModal = ({ productData, onClose }) => {
  const [name, setName] = useState(productData.name || "");
  const [price, setPrice] = useState(productData.price || 0);
  const [img, setImg] = useState(productData.img || "");
  const [descrip, setDescrip] = useState(productData.descrip || "");
  const [fav, setFav] = useState(productData.fav || false);
  const [category, setCategory] = useState(productData.category || "");
  const [stock, setStock] = useState(productData.stock || 0);
  const [state, setState] = useState(productData.state || false);

  useEffect(() => {
    // Actualizamos los campos del formulario cuando se recibe el nuevo productData
    if (productData) {
      setName(productData.name);
      setPrice(productData.price);
      setImg(productData.img);
      setDescrip(productData.descrip);
      setFav(productData.fav);
      setCategory(productData.category);
      setStock(productData.stock);
      setState(productData.state);
    }
  }, [productData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = {
        name,
        price,
        img,
        descrip,
        fav,
        category,
        stock,
        state,
      };

      // Usamos axios para enviar la solicitud de actualización a la API
      const response = await axios.put(
        `http://localhost:3900/api/product/${productData._id}`,
        updatedProduct
      );

      if (response.status === 200) {
        alert("Producto actualizado con éxito.");
        onClose(); 
      } else {
        alert("Hubo un error al actualizar el producto.");
        console.error("Hubo un error al actualizar el producto.");
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  return (
    <ModalStyled>
      <h3>Editar un Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img">Imagen URL:</label>
          <input
            type="text"
            id="img"
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descrip">Descripción:</label>
          <textarea
            id="descrip"
            name="descrip"
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fav">Favorito:</label>
          <select
            name="fav"
            value={fav}
            onChange={(e) => setFav(e.target.value === "true")}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value === "true")}
          >
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit">Editar</button>
        <button type="button" onClick={onClose}>
          Cerrar
        </button>
      </form>
    </ModalStyled>
  );
};

EditProductModal.propTypes = {
  onClose: PropTypes.func,
  productData: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    descrip: PropTypes.string,
    fav: PropTypes.bool,
    category: PropTypes.string,
    stock: PropTypes.number,
    state: PropTypes.bool,
  }),
};

export default EditProductModal;