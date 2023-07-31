import React, { useState } from "react";
// import plato from "../../assets/plato/Dish.jpg";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";

const CardComponent = (props) => {
  const { name, price, img, descrip } = props;
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
        <img src={img} />
        <h2>{name}</h2>
        <p>{descrip}</p>
        <span>$ {price}</span>
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
            <ButtonGlobal buttonless="true" onClick={() => lessQuantity()}>
              -
            </ButtonGlobal>
            <span className="quantity">{quantity}</span>
            <ButtonGlobal buttonmore="true" onClick={moreQuantity}>
              +
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
