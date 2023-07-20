import { styled } from "styled-components";

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

  & .buttons {
    position: absolute;
    /* width: 100px; */
    right: 15px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  & .quantity {
    width: 50px;
    height: 20px;
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
