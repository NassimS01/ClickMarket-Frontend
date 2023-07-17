import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import plato from "../../assets/plato/Dish.jpg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ButtonGlobal } from "../ButtonGlobal/ButtonGlobal";

export const ContainerCards = styled.div`
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  margin: 15px 15px 0px 0px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 370px;
  height: 410px;
  border: 1px solid #efefef;
  border-radius: 20px;
  color: #000;

  & img {
    margin: 0 auto;
    /* margin-top: 20px; */
    width: 185px;
    height: 185px;
  }

  & h2 {
    margin: 47px 0px 0px 28px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  & p {
    margin: 6px 0px 0px 28px;
    width: 287px;
    font-size: 16px;
  }

  & span {
    margin: 20px 0px 0px 28px;
    font-weight: 500;
    font-size: 20px;
  }
`;

export const ButtonsCard = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const CardComponent = () => {
  const [cart, setCart] = useState(false);
  const [heart, setHeart] = useState(false);

  const handleCart = () => {
    setCart(!cart);
  };

  const handleHeart = () => {
    setHeart(!heart);
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
          {cart ? "En el carrito" : "Agregar al carrito"}
        </ButtonGlobal>
      </Card>
      ;
    </>
  );
};

export default CardComponent;
