import { useEffect, useState } from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../../../backend/utils/functions";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
  toggleProductCartStatus,
} from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import {
  alertTime,
  alertConfirmCancel,
} from "../../../../backend/utils/alerts";
import { getUserCart, getUserWishlist } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { updateSubtotal } from "../../redux/reducers/cartSlice";

const ProductCart = ({ id, name, price, stock, img, quantity }) => {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.user);

  console.log(userCart);

  const handleIncreaseQuantity = () => {
    console.log("increase quantity");
    dispatch(increaseCartItemQuantity(id));
  };

  const handleDecreaseQuantity = () => {
    console.log("decrase quantity");
    if (quantity <= 1) {
      return;
    } else {
      dispatch(decreaseCartItemQuantity(id));
    }
  };
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const removeFromCartHandler = (id) => {
    alertConfirmCancel(
      "",
      "¿Deseas eliminar este producto de tu carrito?",
      "question",
      "Confirmar",
      "Cancelar",
      () => {
        dispatch(removeFromCart(id));
        dispatch(toggleProductCartStatus(id, false));
        window.location.reload();
      }
    );
  };

  return (
    <CartProduct>
      <div className="imgProductCart">
        <img src={img} alt="" />
      </div>
      <div className="infoProductCart">
        <ButtonLink
          user="true"
          className="deleteProductCart"
          onClick={() => removeFromCartHandler(id)}
        >
          <BsTrash size="22px" color="var(--colorPrimary)" />
        </ButtonLink>
        <h4>{name}</h4>
        <div className="quantity">
          <p>Cantidad:</p>
          <ButtonLink user="true" onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
            <BsDash size="22px" className="icon" color="var(--colorPrimary)" />
          </ButtonLink>
          <span>{quantity}</span>
          <ButtonLink user="true" onClick={handleIncreaseQuantity}>
            <BsPlus size="22px" className="icon" color="var(--colorPrimary)" />
          </ButtonLink>
        </div>
        <div className="subTotal">
          <p>Subtotal:</p>
          <span>{formatPrice(price * quantity)}</span>
        </div>
      </div>
    </CartProduct>
  );
};

export default ProductCart;
