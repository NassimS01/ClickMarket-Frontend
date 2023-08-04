import { useState } from "react";
import Modal from "./Modal";
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
      {showModal && <Modal onClose={handleCloseModal} />}
    </BtnAddStyled>
  );
};

export default BtnModal;
