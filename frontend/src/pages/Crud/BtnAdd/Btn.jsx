import ProductForm from "./ProductForm";
import { BtnAddStyled } from "./BtnStyled";
import { useState } from "react";

const BtnModal = () => {
  const [showModal, setShowModal] = useState(false);
  

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

 
  return (
    <BtnAddStyled>
      {!showModal && <button className="btn-add" onClick={handleButtonClick}>+ Agregar</button>}
      {showModal && <ProductForm onClose={handleCloseModal} />}
    </BtnAddStyled>
  );
};

export default BtnModal;
