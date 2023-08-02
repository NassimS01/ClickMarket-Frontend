import { useState } from 'react';
import { Wrapper } from './Wrapper';
import logoClickMarket from '../../assets/logoClickMarketNoEslogan.png';
import { AiOutlineSearch, AiOutlineMenuUnfold, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
    setDropdownOpen(false); 
  }

  function toggleDropdown() {
    setDropdownOpen(prevDropdownOpen => !prevDropdownOpen);
  }

  return (
    <Wrapper>
      <button className="btn search-btn" id="search-btn">
      <AiOutlineSearch/>
      </button>

      <div className="logo">
        <img src={logoClickMarket} alt="Logo Click Market" />
      </div>

      <button className={`btn menu-btn ${menuOpen ? 'open' : ''}`} id="menu-btn" onClick={toggleMenu}>
        <AiOutlineMenuUnfold/>
      </button>
      <nav className={`nav-links ${menuOpen ? 'show' : ''}`} id="nav-links">
        <a href="" onClick={toggleMenu}>
          Inicio
        </a>
        <div className="dropdown-container">
          <button
            className={`btn dd-btn ${dropdownOpen ? 'dd-active' : ''}`}
            id="dd-btn"
            onClick={toggleDropdown}
          >
            Categorias<MdArrowDropDown/>
          </button>
          <div className={`dropdown ${dropdownOpen ? 'expanded' : ''}`} id="dd-links">
            <a href="" onClick={toggleMenu}>
              Bazar
            </a>
            <span className="divider">  </span>
            <a href="" onClick={toggleMenu}>
              Carnes
            </a>
            <span className="divider">  </span>
            <a href="" onClick={toggleMenu}>
              Almacén
            </a>
            <span className="divider">  </span>
            <a href="" onClick={toggleMenu}>
              Otros
            </a>
          </div>
        </div>
        <a href="" onClick={toggleMenu}>
          OFERTAS
        </a>
        <a href="" onClick={toggleMenu}>
          Contacto
        </a>
        <div className="social-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <AiOutlineShoppingCart/>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <AiOutlineUser/>
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;