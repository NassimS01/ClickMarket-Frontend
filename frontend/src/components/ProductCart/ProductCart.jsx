import { useState } from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../../../backend/utils/functions";
import { removeFromCart } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { alertTime } from "../../../../backend/utils/alerts";

const ProductCart = ({ id, name, price, img }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const [subtotal, setSubtotal] = useState(price);

    const handleIncrement = () => {
        setQty(qty + 1);
        calculateSubtotal(qty + 1);
    };

    const handleDecrement = () => {
        if (qty > 1) {
            setQty(qty - 1);
            calculateSubtotal(qty - 1);
        }
    };

    const calculateSubtotal = (newQty) => {
        setSubtotal(price * newQty);
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
        alertTime("Eliminado del Carrito", "warning")
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
                    <span>{formatPrice(subtotal)}</span>
                </div>
            </div>
        </CartProduct>
    );
};

export default ProductCart;