import { useState } from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../utils/formatPrice";

const ProductCart = ({ name, price, img }) => {
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    qty == 1 ? "" : setQty(qty - 1);
  };
  return (
    <CartProduct>
      <div className="imgProductCart">
        <img src={img} alt="" />
      </div>
      <div className="infoProductCart">
        <ButtonLink className="deleteProductCart">
          <BsTrash size="22px" color="var(--colorPrimary)" />
        </ButtonLink>
        <h2>{name}</h2>
        <div className="quantity">
          <p>Cantidad:</p>
          <ButtonLink onClick={handleDecrement}>
            <BsDash size="18px" color="var(--colorPrimary)" />
          </ButtonLink>
          <span>{qty}</span>
          <ButtonLink onClick={handleIncrement}>
            <BsPlus size="18px" color="var(--colorPrimary)" />
          </ButtonLink>
        </div>
        <div className="subTotal">
          <p>Sub total:</p>
          <span>{formatPrice(price)}</span>
        </div>
      </div>
    </CartProduct>
  );
};

export default ProductCart;
