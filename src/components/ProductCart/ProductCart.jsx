import { useEffect} from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../utils/functions"
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "../../redux/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../../redux/actions/user";

const ProductCart = ({
  id,
  name,
  price,
  stock,
  img,
  quantity,
  removeProductFromCart,
}) => {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.user);

  const handleIncreaseQuantity = () => {
    dispatch(increaseCartItemQuantity(id));
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) {
      return;
    } else {
      dispatch(decreaseCartItemQuantity(id));
    }
  };
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  return (
    <CartProduct>
      <div className="imgProductCart">
        <img src={img} alt="" />
      </div>
      <div className="infoProductCart">
        <ButtonLink
          user="true"
          className="deleteProductCart"
          onClick={() => removeProductFromCart(id)}
        >
          <BsTrash size="22px" color="var(--colorPrimary)" />
        </ButtonLink>
        <h4>{name}</h4>
        <div className="quantity">
          <p>Cantidad:</p>
          <ButtonLink
            user="true"
            onClick={handleDecreaseQuantity}
            disabled={quantity <= 1}
          >
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
