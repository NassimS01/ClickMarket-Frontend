import { PanelUno } from "./PanelOneStyled";
import { useSelector } from "react-redux";
import LinkItem from "../../../components/LinkItem/LinkItem";

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
