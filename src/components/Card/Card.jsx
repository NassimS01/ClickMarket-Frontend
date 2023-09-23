import React, { useEffect} from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { getDiscount, formatPrice } from "../../utils/functions";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import { useNavigate } from "react-router-dom";
import { alertConfirmCancel, alertTime } from "../../utils/alerts";
import {
  getUserCart,
  getUserWishlist,
} from "../../redux/actions/user";

const CardComponent = ({ id, name, price, img, description, discount }) => {
  const navigate = useNavigate();
  const priceWithDiscount = getDiscount(price, discount);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const isProductInWishlist = useSelector(
    (state) => state.wishlist.productInWishlistStatus[id]
  );
  const isProductInCart = useSelector(
    (state) => state.cart.productInCartStatus[id]
  );

  useEffect(() => {
    if (isProductInWishlist) {
    } else {
    }
  }, [isProductInWishlist]);

  const { userCart } = useSelector((state) => state.user);
  const { userWishlist } = useSelector((state) => state.user);

  const addToCartHandler = (id) => {
    if (isAuthenticated) {
      dispatch(addToCart(id, name, price, img, description, discount));
      alertTime(
        "Agregado al Carrito",
        "success",
        "var(--colorSuccess)",
        "white"
      );
    } else {
      alertTime(
        "Debes iniciar sesion para usar esta funcionalidad",
        "error",
        "var(--colorPrimary)",
        "white"
      );
      navigate("/login");
    }
  };

  const removeFromCartHandler = (id) => {
    alertConfirmCancel(
      "",
      "¿Deseas eliminar este producto de tu carrito?",
      "question",
      "Confirmar",
      "Cancelar",
      () => {
        dispatch(removeFromCart(id));
      }
    );
  };

  const addToWishlistHandler = (id) => {
    if (isAuthenticated) {
      dispatch(addToWishlist(id, name, price, img, description, discount));
      alertTime(
        "Agregado a Favoritos",
        "success",
        "var(--colorSuccess)",
        "white"
      );
    } else {
      alertTime(
        "Debes iniciar sesion para usar esta funcionalidad",
        "error",
        "var(--colorPrimary)",
        "white"
      );
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = (id) => {
    alertConfirmCancel(
      "",
      "Deseas eliminar este producto de tus Favoritos?",
      "question",
      "Confirmar",
      "Cancelar",
      () => {
        dispatch(removeFromWishlist(id));
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserWishlist());
    }
  }, [isProductInWishlist]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserCart());
    }
  }, []);

  return (
    <>
      <Card>
        <img src={img} draggable="false" className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="discount">{discount}%</p>
        <div className="container-price">
          <span className="product-price">{formatPrice(priceWithDiscount)}</span>
          <span className="product-discount">
            {formatPrice(price)}
          </span>
        </div>

        {isProductInWishlist ? (
          <ButtonsCard>
            <AiFillHeart
              size={20}
              className="cursor-pointer"
              onClick={() => removeFromWishlistHandler(id)}
              color="white"
              title="Quitar de Favoritos"
            />
          </ButtonsCard>
        ) : (
          <ButtonsCard>
            <AiOutlineHeart
              size={20}
              className="cursor-pointer"
              onClick={() => addToWishlistHandler(id)}
              title="Agregar a Favoritos"
              color="white"
            />
          </ButtonsCard>
        )}

        <div className="container-button">
          {isProductInCart ? (
            <ButtonGlobal
              buttoncard="true"
              onClick={() => removeFromCartHandler(id)}
            >
              Quitar del carrito
            </ButtonGlobal>
          ) : (
            <ButtonGlobal onClick={() => addToCartHandler(id)}>
              Agregar al carrito
            </ButtonGlobal>
          )}
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
