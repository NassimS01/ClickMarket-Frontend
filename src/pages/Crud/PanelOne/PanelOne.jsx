import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { PanelUno } from "./PanelOneStyled";
import { StyledBtnCrud } from "./BtnCrudStyled";
import { Link } from "react-router-dom"

const PanelOne = () => {
  return (
    <PanelUno>
      <PiUserCirclePlusDuotone className="userCircle" />
      <h3>Administrador</h3>
      <p>Francisco</p>
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
