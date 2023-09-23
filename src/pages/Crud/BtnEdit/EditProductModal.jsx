import { ModalStyled } from "../BtnAdd/ModalStyled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../redux/actions/product";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";
import { alertTime } from "../../../utils/alerts";

const EditProductModal = ({ productData, onClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(productData && productData.name);
  const [price, setPrice] = useState(productData && productData.price);
  const [discount, setDiscount] = useState(productData && productData.discount);
  const [description, setDescrip] = useState(productData && productData.description);
  const [category, setCategory] = useState(productData && productData.category);
  const [stock, setStock] = useState(productData && productData.stock);
  const [state, setState] = useState(productData && productData.state);

  useEffect(() => {
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

  const regexProd = /^[a-zA-Z0-9,. -]{1,30}$/
  const regexDesc = /^[a-zA-Z0-9,. -]{1,40}$/
  const regexPrice = /^(?!0+$)[0-9]{2,6}$/
  const regexStock = /^(?!0+$)[0-9]{1,6}$/
  const regexDisc = /^(?!0{1,2}$)(10|[1-9][0-9]|90)$/

  const handleSubmit = async (e) => {
    e.preventDefault();

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


    try {

      dispatch(editProduct(productData._id, name, price, discount, description, category, stock, state));
      alertTime(
        "Producto actualizado",
        "success",
        "var(--colorSuccess)",
        "white"
      );
      let interval = setInterval(()=>{
        window.location.reload()
      },2000)
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
