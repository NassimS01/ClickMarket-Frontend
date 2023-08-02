import React, { useState } from "react";
// import plato from "../../assets/plato/Dish.jpg";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { getDiscount } from "../../utils/functions";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";

const CardComponent = ({ name, price, img, descrip, discount }) => {
  const priceWithDiscount = getDiscount(price, discount);
  const [cart, setCart] = useState(false);
  const [heart, setHeart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    setCart(!cart);
  };

  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <>
      <Card>
        <img src={img} draggable="false" className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{descrip}</p>
        <p className="discount">{discount}%</p>
        <div className="container-price">
          <span className="product-price">${price}</span>
          <span className="product-discount">
            <strike>${priceWithDiscount}</strike>
          </span>
        </div>
        <ButtonsCard onClick={handleHeart}>
          {heart ? (
            <AiFillHeart size="20px" color="white" />
          ) : (
            <AiOutlineHeart size="20px" color="white" />
          )}
        </ButtonsCard>
        <div class="container-button">
        <ButtonGlobal onClick={handleCart} buttoncard>
          Agregar al carrito
        </ButtonGlobal>
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
