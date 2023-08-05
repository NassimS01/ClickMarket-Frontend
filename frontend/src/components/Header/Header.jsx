import React,{ useState } from "react";
import { Wrapper } from "./Wrapper";
import logoClickMarket from "../../assets/logoClickMarketNoEslogan.png";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { HeaderWrapper } from "./HeaderStyled";
import LinkItem from "../LinkItem/LinkItem";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    setDropdownOpen(false);
  }

  function toggleDropdown() {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  }

  return (
    <Wrapper>
      <button className="btn search-btn" id="search-btn">
        <AiOutlineSearch />
      </button>

      <div className="logo">
        <img src={logoClickMarket} alt="Logo Click Market" />
      </div>

      <button
        className={`btn menu-btn ${menuOpen ? "open" : ""}`}
        id="menu-btn"
        onClick={toggleMenu}
      >
        <AiOutlineMenuUnfold />
      </button>
      <nav className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
        <LinkItem to="/" onClick={toggleMenu}>
          Inicio
        </LinkItem>
        <LinkItem to="/categorias">Categorias</LinkItem>
        <LinkItem to="/ofertas" onClick={toggleMenu}>
          Ofertas
        </LinkItem>
        <LinkItem to="/contacto" onClick={toggleMenu}>
          Contacto
        </LinkItem>
        <div className="social-links">
          <LinkItem to="/carrito" rel="noopener noreferrer">
            <AiOutlineShoppingCart />
          </LinkItem>
          <LinkItem to="/login" rel="noopener noreferrer">
            <AiOutlineUser />
          </LinkItem>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;