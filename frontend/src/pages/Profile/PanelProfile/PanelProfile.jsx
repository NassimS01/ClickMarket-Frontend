import { Link } from "react-router-dom";
import { LeftContainer } from "./PanelProfileStyles";
import { AiFillHeart, AiFillShopping, AiFillSetting } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs"
import { useSelector } from "react-redux";

const PanelProfile = () => {
    const {user} = useSelector((state) => state.user)
    return (
        <>
            <LeftContainer>
                <div className="avatar-container">
                    <img
                        src={`${user?.avatar?.url}`}
                        className="user-avatar"
                        alt="" />
                    <p>Hola! {user.name}</p>
                </div>
                <div>
                    <Link to='wishlist'>
                        <AiFillHeart />
                        Mis Favoritos
                    </Link>
                    <Link to='cart'>
                        <BsCartFill />
                        <p>Mi Carrito</p>
                    </Link>
                    <Link to='orders'>
                        <AiFillShopping />
                        <p>Ordenes de Compra</p>
                    </Link>
                </div>
                <div>
                    <Link to='settings'>
                        <AiFillSetting />
                        <p>Opciones</p>
                    </Link>

                    <button>Cerrar Sesión</button>
                </div>
            </LeftContainer>
        </>
    )
}

export default PanelProfile;