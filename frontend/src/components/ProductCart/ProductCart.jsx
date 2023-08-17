import { useEffect, useState } from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../../../backend/utils/functions";
import {
  removeFromCart,
  toggleProductCartStatus,
} from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { alertTime, alertConfirmCancel } from "../../../../backend/utils/alerts";
import { getUserCart, getUserWishlist } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { updateSubtotal } from "../../redux/reducers/cartSlice";


const ProductCart = ({ id, name, price, stock, img }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserCart());
    }, []);

    const removeFromCartHandler = (id) => {
        alertConfirmCancel("", "¿Deseas eliminar este producto de tu carrito?", "question", "Confirmar", "Cancelar", () => {
            dispatch(removeFromCart(id));
            dispatch(toggleProductCartStatus(id, false));
            window.location.reload()
        });
    };

    return (
        <CartProduct>
            <div className="imgProductCart">
                <img src={img} alt="" />
            </div>
            <div className="infoProductCart">
                <ButtonLink className="deleteProductCart" onClick={() => removeFromCartHandler(id)}>
                    <BsTrash size="22px" color="var(--colorPrimary)" />
                </ButtonLink>
                <h4>{name}</h4>            
                <div className="subTotal">
                    <p>Sub total:</p>
                    <span>{formatPrice(price)}</span>
                </div>
                <div>
                    <p>Quedan {stock} unidades</p>
                </div>
            </div>
        </CartProduct>
    );

};

export default ProductCart;
