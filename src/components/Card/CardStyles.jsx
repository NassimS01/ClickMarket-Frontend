import { styled } from "styled-components";

export const ContainerCards = styled.div`
  max-width: 1440px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  width: 250px;
  height: 400px;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #efefef;
  border-radius: 20px;
  color: #000;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);

  & .product-image {
    margin: 0 auto;
    padding: .2rem;
    width: 150px;
    height: auto;
    transition: ease 300ms;
    flex-grow: 1;
  }

  .product-image:hover{
    transform: scale(1.1);
  }

  & .product-description{
    display: flex;
    justify-content: space-around;
  }

  & .container-price{
    margin: 1rem 0;
  }

  & .discount{
    text-align: center;
    align-self: center;
    color: white;
    font-weight: bold;
    width: 50%;
    border-radius: 20px;
    background-color: #4A4A49;
    margin-top: .5rem;
  }

  & .product-price {
    color: red;
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 0 .5rem 0 0;
  }

  & .product-discount{
    color: gray;
  }

  & .buttons {
    position: absolute;
    right: 15px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  & .quantity {
    width: 50px;
    height: 52px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
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
