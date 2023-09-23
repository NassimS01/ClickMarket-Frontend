import { PanelsTwoStyled } from "./PanelsTwoStyled";
import BtnModal from "../BtnAdd/Btn";
import Products from "./Products";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const PanelProducts = () => {
  const [search, setSearch] = useState("todos");

  const searchBar = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <PanelsTwoStyled>
      <div className="container">
        <div className="searchContainer">
          <AiOutlineSearch className="icon-search" />
          <input
            type="search"
            placeholder="Ingrese un producto"
            className="input-search"
            onChange={(e) => searchBar(e)}
          />
        </div>
      <BtnModal />
      </div>
      <Products search={search} />
    </PanelsTwoStyled>
  );
};

export default PanelProducts;
