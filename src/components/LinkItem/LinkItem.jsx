import React from "react";
import { LinkItemStyled } from "./LinkItemStyled";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const LinkItem = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to); 
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
