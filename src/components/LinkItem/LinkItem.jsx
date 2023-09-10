import React from "react";
import { LinkItemStyled } from "./LinkItemStyled";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const LinkItem = ({ to, children }) => {
  const navigate = useNavigate(); // Obtener la función navigate de react-router-dom

  const handleClick = (e) => {
    e.preventDefault(); // Prevenir la recarga de la página
    navigate(to); // Navegar a la URL especificada
  };

  return (
    <LinkItemStyled
      className={({ isActive }) => (isActive ? "active" : "")}
      to={to}
      onClick={handleClick}
    >
      {children}
    </LinkItemStyled>
  );
};

export default LinkItem;
