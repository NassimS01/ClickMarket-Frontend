import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { PanelUno } from "./PanelOneStyled";
import { StyledBtnCrud } from "./BtnCrudStyled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LinkItem from "../../../components/LinkItem/LinkItem";
import { ButtonGlobal } from "../../../components/ButtonGlobal/ButtonGlobal";

const PanelOne = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <PanelUno>
      <div className="cardUser">
        <img src={`${user?.avatar?.url}`} className="user-avatar" alt="" />
        <h3>Administrador</h3>
        <LinkItem to="/panel-admin/products">Productos</LinkItem>
        <LinkItem to="/panel-admin/users">Usuarios</LinkItem>
        <LinkItem to="/panel-admin/orders">Pedidos</LinkItem>

      </div>
    </PanelUno>
  );
};

export default PanelOne;
