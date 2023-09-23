import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalStyled } from "./ModalStyled";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/product";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";
import { alertTime } from "../../../utils/alerts";

const ProductForm = ({ onClose }) => {
  const { success, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [images, setImages] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [stock, setStock] = useState();
  const [state, setState] = useState();

  useEffect(() => {
    if (error) {
      alertTime(error, "error", "red", "white")
    }
    if (success) {
      alertTime("Producto creado!", "success", "green", "white")
      const interval = setInterval(() => {
        window.location.reload();
      }, 1500);
    }
  }, [dispatch, error, success]);

  const regexProd = /^[a-zA-Z0-9,. -]{1,30}$/
  const regexDesc = /^[a-zA-Z0-9,. -]{1,40}$/
  const regexPrice = /^(?!0+$)[0-9]{2,6}$/
  const regexStock = /^(?!0+$)[0-9]{1,6}$/
  const regexDisc = /^(?!0{1,2}$)(10|[1-9][0-9]|90)$/

  const handleImageChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImages(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images === "") {
      return alertTime("Por favor, inserta una imagen", "warning", "red", "white");
    }

    if (!regexProd.test(name) || !isNaN(name)) {
      return alertTime("Ingresa un nombre válido para el producto", "warning", "red", "white");
    }

    if (!regexDesc.test(description) || !isNaN(description)) {
      return alertTime("Ingresa una descripción válida para el producto", "warning", "red", "white");
    }

    if (category === "") {
      return alertTime("Selecciona una categoria para el producto", "warning", "red", "white");
    }

    if (!regexPrice.test(price)) {
      return alertTime("Ingresa un precio válido para el producto", "warning", "red", "white");
    }

    if (!regexStock.test(stock)) {
      return alertTime("Ingresa un stock válido para el producto", "warning", "red", "white");
    }

    if (!regexDisc.test(discount)) {
      return alertTime("Ingresa un descuento válido para el producto", "warning", "red", "white");
    }


    const newForm = new FormData();

    newForm.set("images", images);
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("price", price);
    newForm.append("discount", discount);
    newForm.append("stock", stock);
    newForm.append("state", state);
    dispatch(
      createProduct({
        name,
        description,
        category,
        price,
        discount,
        stock,
        state,
        images,
      })
    );
  };

  return (
    <ModalStyled>
      <div className="modal">
        <h3 className="title">Agrega un Producto</h3>
        <form onSubmit={handleSubmit}>
            <div className="image-container">
              {images ? (
                <img src={images} alt="" className="product-image" />
              ) : (
                <div className="icon-text-container">
                  <label htmlFor="upload">
                    <AiOutlinePlusCircle
                      size={30}
                      className="image-icon"
                      color="#555"
                    />
                  </label>
                  <input
                    type="file"
                    name=""
                    id="upload"
                    className="hidden input"
                    multiple
                    onChange={handleImageChange}
                  />
                  <i className="text-image">No hay imagen del producto</i>
                </div>
              )}
            </div>
          <div className="name-price-container">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre producto"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="price-container">
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Precio $"
                value={price}
                className="input"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="discount-stock-container">
            <input
              type="number"
              id="discount"
              name="discount"
              value={discount}
              placeholder="Descuento"
              className="input"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <input
              type="number"
              id="stock"
              name="stock"
              value={stock}
              placeholder="Stock"
              className="input"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="category-and-state-container">
            <div className="category-state-container">
              <label htmlFor="category">Categoría:</label>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="undefined">Seleccionar Categoria</option>
                <option value="bazar">Bazar</option>
                <option value="bebidas">Bebidas</option>
                <option value="carnes">Carnes</option>
                <option value="comestibles">Comestibles</option>
                <option value="congelados">Congelados</option>
                <option value="fiambres">Fiambres</option>
                <option value="frutas">Frutas</option>
                <option value="lacteos">Lacteos</option>
                <option value="limpieza">Limpieza</option>
                <option value="panaderia">Panaderia</option>
              </select>
            </div>
            <div className="category-state-container">
              <label htmlFor="state">Estado:</label>
              <select
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>

          <div className="description-container">
            <label htmlFor="descrip">Descripción:</label>
            <textarea
              id="descrip"
              name="descrip"
              value={description}
              className="textarea"
              placeholder="Descripción"
              onChange={(e) => setDescription(e.target.value)}
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

ProductForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProductForm;
