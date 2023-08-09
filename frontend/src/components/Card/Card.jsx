import React, { useState } from "react";
// import plato from "../../assets/plato/Dish.jpg";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { getDiscount, formatPrice } from "../../../../backend/utils/functions";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";
import { Card, ButtonsCard } from "./CardStyles";

const CardComponent = ({ id, name, price, img, descrip, discount }) => {
  const priceWithDiscount = getDiscount(price, discount);
  const [heart, setHeart] = useState(false);

  const storeInLocalStorage = (product) => {
    localStorage.setItem("cart", JSON.stringify(product));
  };

  const product = [
    {
      id: id,
      name: name,
      price: price,
      img: img,
      descrip: descrip,
      discount: discount,
    },
  ];

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
          <span className="product-price">{formatPrice(price)}</span>
          <span className="product-discount">
            {formatPrice(priceWithDiscount)}
          </span>
        </div>
        <ButtonsCard onClick={handleHeart}>
          {heart ? (
            <AiFillHeart size="20px" color="white" />
          ) : (
            <AiOutlineHeart size="20px" color="white" />
          )}
        </ButtonsCard>
        <div className="container-button">
          <ButtonGlobal
            onClick={() => storeInLocalStorage(product)}
            buttoncard="true"
          >
            Agregar al carrito
          </ButtonGlobal>
        </div>
      </Card>
    </>
  );
};

export default CardComponent;