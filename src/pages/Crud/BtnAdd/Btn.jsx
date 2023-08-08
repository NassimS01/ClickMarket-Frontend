import { useState } from "react";
import ProductForm from "./ProductForm";
import { BtnAddStyled } from "./BtnStyled";

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
