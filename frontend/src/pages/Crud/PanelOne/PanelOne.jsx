import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { PanelUno } from "./PanelOneStyled";
import { StyledBtnCrud } from "./BtnCrudStyled";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const PanelOne = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <PanelUno>
      <img
        src={`${user?.avatar?.url}`}
        className="user-avatar"
        alt="" />
      <h3>Administrador</h3>
      <StyledBtnCrud>
        <Link to="products" className="btn-adm">Productos</Link>
        <Link to="users" className="btn-adm">Usuarios</Link>
        <Link to="orders" className="btn-adm">Pedidos</Link>
        <button className="logout">Cerrar Sesión</button>
      </StyledBtnCrud>
    </PanelUno>
  );
};

export default PanelOne;