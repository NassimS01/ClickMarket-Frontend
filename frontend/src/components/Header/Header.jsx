import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredCategories } from "../../redux/actions/categories";

const Header = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);
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

  const filteredCategories = useSelector(
    (state) => state.categories.filteredCategories
  );

  useEffect(() => {
    dispatch(fetchFilteredCategories());
  }, [dispatch]);

  const location = useLocation();

  const pathnameSegments = location.pathname.split("/");
  const segment = pathnameSegments[pathnameSegments.length - 1];
  const lastSegment = Object.keys(filteredCategories).includes(segment) ? `${segment}` : "todos"
  const urlCategory = `/categorias/${lastSegment}`;

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
        <LinkItem to={urlCategory}>Categorias</LinkItem>
        <LinkItem to="/contacto" onClick={toggleMenu}>
          Contacto
        </LinkItem>
        <a
          href="https://www.linkedin.com/in/nassim-salomon/"
          target="_blank"
        ></a>
        <div className="social-links">
          <ButtonLink
            onClick={() => navigate("/carrito")}
            rel="noopener noreferrer"
          >
            <AiOutlineHeart className="icon" />
          </ButtonLink>
          <ButtonLink
            onClick={() => navigate("/carrito")}
            rel="noopener noreferrer"
          >
            <AiOutlineShoppingCart className="icon" />
          </ButtonLink>

          <div>
            {isAuthenticated ? (
              <ButtonLink onClick={() => navigate("/")}>
                <img
                  src={`${user?.avatar?.url}`}
                  className="user-avatar"
                  alt=""
                />
              </ButtonLink>
            ) : (
              <ButtonLink onClick={() => navigate("/login")}>
                <AiOutlineUser className="icon" />
              </ButtonLink>
            )}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
