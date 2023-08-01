import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { ContainerNavBar } from "./NavBarStyled";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ open }) => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <ContainerNavBar open={open}>
        <div className="navbar-links">
          {/* <NavLink to="/">Hola</NavLink> */}
          <Link to="/">Inicio</Link>
          <Link to="/">Ofertas</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/">Contacto</Link>
        </div>

        <div className="navbar-icons">
          <button className="button-nav2">
            <FiSearch />
          </button>
          <button className="button-nav2">
            <BsCart2 />
          </button>
          <button className="button-nav2">
            <RxPerson />
          </button>
        </div>
      </ContainerNavBar>
    </>
  );
};

export default NavBar;
