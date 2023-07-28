import { ModalStyled } from "./ModalStyled";

const Modal = ({ onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <ModalStyled>
      <h3>Agrega un Producto</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <select name="estado">
            <option value="enable">Disponible</option>
            <option value="disabled">No disponible</option>
          </select>
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input type="number" minLength={1} id="precio" />
        </div>
        <div>
          <label htmlFor="categoria">Categoría:</label>
          <select name="categoria">
            <option value="bebidas">bebidas</option>
            <option value="frutas">frutas</option>
          </select>
        </div>
        <div>
          <textarea
            name="description"
            cols="45"
            rows="2"
            placeholder="Descripcion del producto"
          ></textarea>
        </div>
        <div className="content-btn">
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </form>
    </ModalStyled>
  );
};

export default Modal;
