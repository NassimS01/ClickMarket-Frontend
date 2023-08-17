import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { formatPrice } from "../../../../../../backend/utils/functions";
import { ButtonGlobal } from "../../../../components/ButtonGlobal/ButtonGlobal";
import { ButtonLink } from "../../../../components/Header/Wrapper";
import ProductCart from "../../../../components/ProductCart/ProductCart";
import { getUserCart, getUserWishlist } from "../../../../redux/actions/user";
import { CartContainer } from "../../../Cart/CartStyles";

const UserCart = () => {
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.user);
  
  let totalPrice = 0;
  const subtotal = userCart.map((product)=> (totalPrice += product.price))


  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);


  return (
    <CartContainer>
      <h2 className="title">Mi carrito</h2>
      <div className="cart">
        {userCart.length == 0 ? (
          <h3 className="title">Todavia no hay productos en tu carrito</h3>
        ) : (
          <div className="cartSectionLeft">
            {userCart.map((product) => (
              <ProductCart
                key={product._id}
                id={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                img={product.images.url}
              />
            )

            )}
          </div>
        )}
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
                <span>{formatPrice(totalPrice+3000)}</span>
              </div>
              <Link to="/payment">
                <ButtonGlobal green="true">Comprar</ButtonGlobal>
              </Link>
            </div>
          </div>
        </div>
    </CartContainer>
  );
};

export default UserCart;

const Container = styled.div`
  margin-top: 100px;
  .cartSectionRight {
    position: sticky;
    top: 0;
    right: 0;
    margin-left: 5rem;
  }


    .cartSectionRight{
        position: sticky;
        top: 0;
        right: 0;
        margin-left: 1rem;
    }
`;

const ButtonPayment = styled.button`
    background-color: green;
    border-radius: 10px;
    position: sticky;
    top: 0;
    right: -100%;
`;
