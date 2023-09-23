import { useEffect, useState } from "react";
import { ButtonLink, Wrapper } from "./Wrapper";
import logoClickMarket from "../../assets/CLICK.png";
import {
  AiOutlineMenuUnfold,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { fetchFilteredCategories } from "../../redux/actions/categories";
import { alertTime, alertConfirmCancel } from "../../utils/alerts";
import { getUserCart } from "../../redux/actions/user";

const Header = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const { isAuthenticated, user, userCart, userWishlist } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  const handleWishlist = () => {
    setMenuOpen(false);

    if (isAuthenticated) {
      navigate("profile/wishlist");
    } else {
      navigate("/login");
      alertTime(
        "Debes iniciar sesion para usar esta funcionalidad",
        "error",
        "var(--colorPrimary)",
        "white",
        ""
      );
    }
  };

  const handleCart = () => {
    setMenuOpen(false);
    if (isAuthenticated) {
      navigate("profile/cart");
    } else {
      navigate("/login");
      alertTime(
        "Debes iniciar sesion para usar esta funcionalidad",
        "error",
        "var(--colorPrimary)",
        "white"
      );
    }
  };

  const logoutHandler = () => {
    alertConfirmCancel(
      "",
      "Estás a punto de cerrar sesión",
      "question",
      "Sí!",
      "No!",
      () => {
        axios
          .get(`${server}/user/logout`, { withCredentials: true })
          .then((res) => {
            alertTime(
              res.data.message,
              "success",
              "var(--colorSuccess)",
              "white"
            );
            const interval = setInterval(() => {
              navigate("/");
              window.location.reload(true);
            }, 2000);
          })
          .catch((error) => {
            alertTime(
              error.response.data.message,
              "error",
              "var(--colorPrimary)",
              "white"
            );
          });
      }
    );
  };

  const filteredCategories = useSelector(
    (state) => state.categories.filteredCategories
  );

  useEffect(() => {
    dispatch(fetchFilteredCategories());
  }, [dispatch, userWishlist, userCart]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserCart());
    }
  }, []);

  const pathnameSegments = location.pathname.split("/");
  const segment = pathnameSegments[pathnameSegments.length - 1];
  const lastSegment = Object.keys(filteredCategories).includes(segment)
    ? `${segment}`
    : "todos";
  const urlCategory = `/categorias/${lastSegment}`;

  return (
    <Wrapper
      headernone={location.pathname == `/verify-user/${id}` ? "true" : "false"}
    >
      <div className="logo" onClick={() => navigate("/")}>
        <img
          src={logoClickMarket}
          alt="Logo Click Market"
          className="logo-click"
        />
      </div>

      <button
        className={`btn menu-btn ${menuOpen ? "open" : ""}`}
        id="menu-btn"
        onClick={toggleMenu}
      >
        <AiOutlineMenuUnfold />
      </button>
      <nav className={`nav-links ${menuOpen ? "show" : ""}`} id="nav-links">
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Inicio
        </NavLink>
        <NavLink to={urlCategory} onClick={closeMenu}>
          Categorias
        </NavLink>
        {user?.role === "Admin" ? (
          <NavLink to="/panel-admin" onClick={closeMenu}>
            Panel de control
          </NavLink>
        ) : (
          ""
        )}
        {user?.role === "user" ? (
          <NavLink to="/profile/orders" onClick={closeMenu}>
            Pedidos
          </NavLink>
        ) : (
          ""
        )}
        <div className="social-links">
          <ButtonLink onClick={handleWishlist} rel="noopener noreferrer">
            <AiOutlineHeart className="icon" />
            <span>{userWishlist.length}</span>
          </ButtonLink>
          <ButtonLink onClick={handleCart} rel="noopener noreferrer">
            <AiOutlineShoppingCart className="icon" />
            <span>{userCart.length}</span>
          </ButtonLink>

          <ButtonLink onClick={toggleDropdown}>
            {isAuthenticated ? (
              <div className="user-dropdown">
                <img
                  src={`${user?.avatar?.url}`}
                  className="user-avatar"
                  alt=""
                  to="/login"
                />
                {dropdownOpen && (
                  <div className="dropdown-content">
                    {user?.role === "Admin" ? (
                      <>
                        <Link
                          to="/panel-admin"
                          className="btn-dropdown"
                          onClick={closeMenu}
                        >
                          Panel
                        </Link>
                        <button
                          onClick={logoutHandler}
                          className="btn-dropdown"
                        >
                          Salir
                        </button>
                      </>
                    ) : (
                      <div className="container-buttons-user">
                        <button
                          onClick={() => {
                            navigate("/profile/settings");
                            closeMenu();
                          }}
                          className="btn-dropdown"
                        >
                          Perfil
                        </button>
                        <button
                          onClick={logoutHandler}
                          className="btn-dropdown"
                        >
                          Salir
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <ButtonLink
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
              >
                <AiOutlineUser className="icon" />
              </ButtonLink>
            )}
          </ButtonLink>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
