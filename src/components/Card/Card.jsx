import React, { useState } from "react";
import plato from "../../assets/plato/Dish.jpg";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";

const CardComponent = () => {
  const [cart, setCart] = useState(false);
  const [heart, setHeart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleCart = () => {
    setCart(!cart);
  };

  const handleHeart = () => {
    setHeart(!heart);
  };

  const moreQuantity = () => {
    quantity < 10 ? setQuantity(quantity + 1) : "";
    // const valuePrice = (price * (quantity + 1)).toFixed(2);
  };

  const lessQuantity = () => {
    quantity == 1 ? setCart(false) : setQuantity(quantity - 1);
  };
  return (
    <>
      <Card>
        <img src={plato} />
        <h2>Dishim with Fries and Sause</h2>
        <p>Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.</p>
        <span>$7.10</span>
        <ButtonsCard onClick={handleHeart}>
          {heart ? (
            <AiFillHeart size="20px" color="white" />
          ) : (
            <AiOutlineHeart size="20px" color="white" />
          )}
        </ButtonsCard>
        <ButtonGlobal buttoncard="true" onClick={handleCart}>
          {cart ? "" : <AiOutlineShoppingCart size="24px" />}
        </ButtonGlobal>
        {cart == true ? (
          <div className="buttons">
            {" "}
            <ButtonGlobal buttonmore="true" onClick={moreQuantity}>
              +
            </ButtonGlobal>
            <span className="quantity">{quantity}</span>
            <ButtonGlobal buttonless="true" onClick={() => lessQuantity()}>
              -
            </ButtonGlobal>
          </div>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default CardComponent;
