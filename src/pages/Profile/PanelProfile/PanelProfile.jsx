import { AiFillHeart, AiFillShopping, AiFillSetting } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { PanelUno } from "../../Crud/PanelOne/PanelOneStyled";
import LinkItem from "../../../components/LinkItem/LinkItem";

const PanelProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <PanelUno user="true">
      <div className="cardUser">
        <div className="infoLeft">
          <img src={`${user?.avatar?.url}`} className="user-avatar" alt="" />
          <p>
            Hola! <span className="user-name">{user.name}</span>
          </p>
        </div>
        <div className="infoCenter">
          <LinkItem to="wishlist">
            <AiFillHeart />
            Favoritos
          </LinkItem>
          <LinkItem to="cart">
            <BsCartFill />
            <p>Carrito</p>
          </LinkItem>
        </div>
        <div className="infoRight">
          <LinkItem to="orders">
            <AiFillShopping />
            <p>Ordenes</p>
          </LinkItem>
          <LinkItem to="settings">
            <AiFillSetting />
            <p>Opciones</p>
          </LinkItem>
        </div>
      </div>
    </PanelUno>
  );
};

export default PanelProfile;
