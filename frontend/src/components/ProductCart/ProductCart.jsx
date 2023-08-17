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



const ProductCart = ({ id, name, price, img }) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState(price);

    useEffect(() => {
        dispatch(getUserCart());
    }, []);


  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

 useEffect(() => {
   const subtotal = qty * price;
   dispatch(updateSubtotal({ productId: id, subtotal })); // Llamada a la acción para actualizar el subtotal en el estado
 }, [qty, price]);
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
          <ButtonLink user="true" onClick={handleDecrement}>
            <BsDash size="22px" className="icon" color="var(--colorPrimary)" />
          </ButtonLink>
          <span>{qty}</span>
          <ButtonLink user="true" onClick={handleIncrement}>
            <BsPlus size="22px" className="icon" color="var(--colorPrimary)" />
          </ButtonLink>
        </div>
        <div className="subTotal">
          <p>Sub total:</p>
          <span>{formatPrice(subtotal)}</span>
        </div>
      </div>
    </CartProduct>
  );
};

export default ProductCart;
