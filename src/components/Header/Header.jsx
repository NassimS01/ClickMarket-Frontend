import { useState } from "react";
import { ButtonLink, Wrapper } from "./Wrapper";
import logoClickMarket from "../../assets/CLICK.png";
import {
  
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiFillHeart,
  AiOutlineHeart,

} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { HeaderWrapper } from "./HeaderStyled";
import LinkItem from "../LinkItem/LinkItem";

const Header = () => {
  const navigate = useNavigate();
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

      <div className="logo" onClick={() => navigate("/")}>
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
        <LinkItem to="/contacto" onClick={toggleMenu}>
          Contacto
        </LinkItem>
        <a href="https://www.linkedin.com/in/nassim-salomon/" target="_blank"></a>
        <div className="social-links">
          <ButtonLink
            onClick={() => navigate("/carrito")}
            rel="noopener noreferrer"
          >
            <AiOutlineHeart className="icon" />
            {/* <span>1</span> */}
          </ButtonLink>
          <ButtonLink
            onClick={() => navigate("/carrito")}
            rel="noopener noreferrer"
          >
            <AiOutlineShoppingCart className="icon" />
            {/* <span>1</span> */}
          </ButtonLink>
          <ButtonLink
            onClick={() => navigate("/login")}
            rel="noopener noreferrer"
          >
            <AiOutlineUser className="icon" />
          </ButtonLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
