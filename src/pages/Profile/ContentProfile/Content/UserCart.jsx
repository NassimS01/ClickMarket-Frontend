import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../../utils/functions";
import { ButtonGlobal } from "../../../../components/ButtonGlobal/ButtonGlobal";
import ProductCart from "../../../../components/ProductCart/ProductCart";
import { getUserCart } from "../../../../redux/actions/user";
import { CartContainer } from "../../../Cart/CartStyles";
import { addOrder } from "../../../../redux/actions/order";
import { removeFromCart } from "../../../../redux/actions/cart";
import { alertConfirmCancel } from "../../../../utils/alerts";

const UserCart = () => {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.user);

  const totalPrice = userCart.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  const checkout = () => {
    dispatch(addOrder(userCart));
  };

  const removeProductFromCart = (productId) => {
    alertConfirmCancel(
      "",
      "¿Deseas eliminar este producto de tu carrito?",
      "question",
      "Confirmar",
      "Cancelar",
      () => dispatch(removeFromCart(productId))
    );
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  return (
    <CartContainer>
      {userCart.length == 0 ? (
        <h3 className="title">Todavia no hay productos en tu carrito</h3>
      ) : (
        <>
          <h2 className="title">Mi carrito</h2>
          <div className="cart">
            <div className="cartSectionLeft">
              {userCart.map((product) => (
                <ProductCart
                  key={product.name}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                  img={product.img || product.images.url }
                  quantity={product.quantity}
                  removeProductFromCart={removeProductFromCart}
                />
              ))}
            </div>
            <div className="cartSectionRigth">
              <h2>Orden</h2>
              <div className="infoOrden">
                <div className="infoItem">
                  <p>
                    {userCart.length <= 1
                      ? "Precio de 1 item seleccionado"
                      : `Precio de ${userCart.length} items seleccionados`}
                  </p>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="infoItem">
                  <p>Costo de envío</p>
                  <span>{formatPrice(3000)}</span>
                </div>
              </div>
              <div className="ordenTotal">
                <div className="infoItem">
                  <p className="total">Total:</p>
                  <span>{formatPrice(totalPrice + 3000)}</span>
                </div>
                <Link onClick={checkout}>
                  <ButtonGlobal green="true">Comprar</ButtonGlobal>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </CartContainer>
  );
};

export default UserCart;
