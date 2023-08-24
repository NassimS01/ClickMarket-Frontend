import { AiOutlineSearch } from "react-icons/ai";
import { PanelsTwoStyled } from "../PanelsTwo/PanelsTwoStyled";
import Users from "./Users";
import { useState } from "react";

const PanelUsers = () => {
  const [search, setSearch] = useState("");

  const searchBar = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <PanelsTwoStyled>
      <h2 className="title">Usuarios</h2>
      <div className="container">
        <div
          className="searchContainer"
          style={{ margin: "15px 0px 40px 0px" }}
        >
          <AiOutlineSearch className="icon-search" />
          <input
            type="search"
            placeholder="Ingrese un email"
            className="input-search"
            onChange={(e) => searchBar(e)}
          />
        </div>
      </div>

      <Users search={search} />
    </PanelsTwoStyled>
  );
};

export default PanelUsers;
