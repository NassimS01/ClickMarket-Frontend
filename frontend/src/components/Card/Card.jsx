import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { getDiscount, formatPrice } from "../../../../backend/src/utils/functions";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlist";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import { useLocation, useNavigate } from "react-router-dom";
import { alertConfirmCancel, alertTime } from "../../../../backend/src/utils/alerts";
import { getUserCart, getUserWishlist } from "../../redux/actions/user";
import { toggleProductWishlistStatus } from '../../redux/actions/wishlist';
import { toggleProductCartStatus } from '../../redux/actions/cart';



const CardComponent = ({ id, name, price, img, descrip, discount }) => {
  const navigate = useNavigate();
  const priceWithDiscount = getDiscount(price, discount);
  const dispatch = useDispatch();
  const { isAuthenticated} = useSelector((state) => state.user);
  const isProductInWishlist = useSelector((state) =>
    state.wishlist.productInWishlistStatus[id] || false
  );
  const isProductInCart = useSelector((state) =>
    state.cart.productInCartStatus[id] || false
  );


  useEffect(() => {
    dispatch(getUserWishlist());
  }, []);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const addToCartHandler = (id) => {
    if (isAuthenticated) {
      dispatch(addToCart(id));
      dispatch(toggleProductCartStatus(id, true));
      alertTime("Agregado al Carrito", "success", "var(--colorSuccess)", "white")
    } else {
      alertTime("Debes iniciar sesion para usar esta funcionalidad", "error", "var(--colorPrimary)", "white")
      navigate("/login")
    }
  };


  const removeFromCartHandler = (id) => {
    alertConfirmCancel("", "¿Deseas eliminar este producto de tu carrito?", "question", "Confirmar", "Cancelar", () => {
    dispatch(removeFromCart(id));
    dispatch(toggleProductCartStatus(id, false));
    window.location.reload()
    });
};


  const addToWishlistHandler = (id) => {
    if (isAuthenticated) {
      dispatch(addToWishlist(id));
      dispatch(toggleProductWishlistStatus(id, true));
      alertTime("Agregado a Favoritos", "success", "var(--colorSuccess)", "white")
    } else {
      alertTime(
        "Debes iniciar sesion para usar esta funcionalidad",
        "error",
        "var(--colorPrimary)",
        "white"
      );
      navigate("/login")
    }
  };

  const removeFromWishlistHandler = (id) => {
    alertConfirmCancel("", "Deseas eliminar este producto de tus Favoritos?", "question", "Confirmar", "Cancelar", () => {
      dispatch(removeFromWishlist(id));
      dispatch(toggleProductWishlistStatus(id, false));
      window.location.reload();
    })

  };


  return (
    <>
      <Card>
        <img src={img} draggable="false" className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{descrip}</p>
        <p className="discount">{discount}%</p>
        <div className="container-price">
          <span className="product-price">{formatPrice(price)}</span>
          <span className="product-discount">
            {formatPrice(priceWithDiscount)}
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
            <ButtonGlobal
              onClick={() => addToCartHandler(id)}
            >
              Agregar al carrito
            </ButtonGlobal>
          )}

        </div>
      </Card>
    </>
  );
};

export default CardComponent;