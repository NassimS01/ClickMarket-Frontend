import { useEffect, useState } from "react";
import { ButtonLink, Wrapper } from "./Wrapper";
import logoClickMarket from "../../assets/CLICK.png";
import {
  AiOutlineSearch,
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import LinkItem from "../LinkItem/LinkItem";
import { useDispatch, useSelector } from "react-redux";import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { fetchFilteredCategories } from "../../redux/actions/categories";
import { alertTime } from "../../../../backend/utils/alerts";



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

  const handleWishlist = ()=>{
    if(isAuthenticated){
      navigate("profile/wishlist");
    }else{
      navigate("/login")
      alertTime("Debes iniciar sesion para usar esta funcionalidad", "error")
    }
  }

  const handleCart = ()=>{
    if(isAuthenticated){
      navigate("profile/cart");
    }else{
      navigate("/login")
      alertTime("Debes iniciar sesion para usar esta funcionalidad", "error")
    }
  }

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        const interval = setInterval(() => {
          navigate("/");
          window.location.reload(true);
        }, 2000);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const filteredCategories = useSelector(
    (state) => state.categories.filteredCategories
  );

  useEffect(() => {
    dispatch(fetchFilteredCategories());
  }, [dispatch]);

  const location = useLocation();

  const pathnameSegments = location.pathname.split("/");
  const segment = pathnameSegments[pathnameSegments.length - 1];
  const lastSegment = Object.keys(filteredCategories).includes(segment)
    ? `${segment}`
    : "todos";
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
        <a href="https://www.google.com/" target="_blank"></a>
        <div className="social-links">
          <ButtonLink
            onClick={handleWishlist}
            rel="noopener noreferrer"
          >
            <AiOutlineHeart className="icon" />
            {/* <span>1</span> */}
          </ButtonLink>
          <ButtonLink
            onClick={handleCart}
            rel="noopener noreferrer"
          >
            <AiOutlineShoppingCart className="icon" />
          </ButtonLink>

          <ButtonLink onClick={toggleDropdown}>
            {isAuthenticated ? (
              <div className="user-dropdown">
                <img
                  src={`${user?.avatar?.url}`}
                  className="user-avatar"
                  alt=""
                />
                {dropdownOpen && (
                  <div className="dropdown-content">
                    {user?.role === "Admin" ? (
                      <>
                        <Link to="/panel-admin/*" className="btn-dropdown">
                          Panel Administrador
                        </Link>
                        <button
                          onClick={logoutHandler}
                          className="btn-dropdown"
                        >
                          Cerrar Sesión
                        </button>
                      </>
                    ) : (
                      <>
                        <Link to="/profile" className="btn-dropdown">
                          Perfil
                        </Link>
                        <button
                          onClick={logoutHandler}
                          className="btn-dropdown"
                        >
                          Cerrar Sesión
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <AiOutlineUser className="icon" />
              </Link>
            )}
          </ButtonLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
