import { styled } from "styled-components";

export const ContainerCards = styled.div`
  max-width: 1440px;
  margin: 30px auto;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Card = styled.div`
  position: relative;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  width: 290px;
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
  z-index: 10;

  & .product-image {
    margin: 0 auto;
    padding: 0.2rem;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
    transition: ease 300ms;
  }

  .product-image:hover {
    transform: scale(1.1);
  }

  .product-name {
    width: 100%;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .product-description {
    height: 50px;
    width: 230px;
    text-overflow: ellipsis;
  }

  & .container-price {
    margin: 1.3rem 0;
  }

  & .discount {
    position: absolute;
    bottom: 109px;
    right: 10px;
    text-align: center;
    align-self: center;
    color: white;
    font-weight: bold;
    width: 70px;
    border-radius: 20px;
    background-color: #4a4a49;
    margin-top: 0.5rem;
  }

  & .product-price {
    color: red;
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 0 0.5rem 0 0;
  }

  & .product-discount {
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: line-through;
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

  & .container-button {
    display: flex;
    justify-content: center;
    width: 100%;
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
  background-color: var(--colorPrimary);
  border-radius: 10px;
  border: none;
  cursor: pointer;


`;