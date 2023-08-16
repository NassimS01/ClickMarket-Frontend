import { useEffect, useState } from "react";
import { CartProduct } from "./ProductCartStyles";
import { ButtonLink } from "../Header/Wrapper";
import { BsPlus, BsDash, BsTrash } from "react-icons/bs";
import { formatPrice } from "../../../../backend/utils/functions";
import { removeFromCart, toggleProductCartStatus } from "../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { alertTime } from "../../../../backend/utils/alerts";
import { getUserCart } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";



const ProductCart = ({ id, name, price, img }) => {
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const [subtotal, setSubtotal] = useState(price);

    useEffect(() => {
        dispatch(getUserCart());
    }, [dispatch]);

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
        dispatch(toggleProductCartStatus(id, false));
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
                <h4>{name}</h4>
                <div className="quantity">
                    <p>Cantidad:</p>
                    <ButtonLink onClick={handleDecrement}>
                        <BsDash size="10px" className="icon" color="var(--colorPrimary)" />
                    </ButtonLink>
                    <span>{qty}</span>
                    <ButtonLink onClick={handleIncrement}>
                        <BsPlus size="10px" className="icon" color="var(--colorPrimary)" />
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