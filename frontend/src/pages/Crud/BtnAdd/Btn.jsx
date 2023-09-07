import ProductForm from "./ProductForm";
import { BtnAddStyled } from "./BtnStyled";
import { useState } from "react";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";

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
      {!showModal && <ButtonGlobal className="btn-add" onClick={handleButtonClick}>Agregar Producto</ButtonGlobal>}
      {showModal && <ProductForm onClose={handleCloseModal} />}
    </BtnAddStyled>
  );
};

export default BtnModal;
