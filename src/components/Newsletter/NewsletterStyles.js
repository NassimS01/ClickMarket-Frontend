import styled from "styled-components";

export const AsideNews = styled.aside`
  background-color: white;
  width: 55%;
  height: 235px;
  border-radius: 47px;
  text-align: center;
  margin: 0 auto 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5em;
  box-shadow: -2px 3px 5px 4px rgba(0, 0, 0, 0.14);

  & h2 {
    font-size: 23px;
    color: #2a333e;
  }

  & .text {
    width: 350px;
    font-size: 12px;
    font-weight: 600;
    color: #2a333e;
  }

  & .form {
    width: 65%;
    height: 70px;
    border-radius: 47px;
    border: 2px solid red;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    & input[type="submit"] {
      color: white;
      font-weight: 500;
      width: 120px;
      height: 50px;
      border-radius: 60px;
      background-color: #ea0000;
      margin-top: 8px;
      margin-right: 2px;
      border-width: 0px;
      border-style: none;
      border-color: none;
      border-image: none;

      &:hover {
        cursor: pointer;
      }
    }

    & input[type="email"] {
      background-color: transparent;
      width: 325px;
      height: 55px;
      margin-top: 6px;
      border-radius: 50px;
      border-width: 0px;
      border-style: none;
      border-color: none;
      border-image: none;
      outline: none;
      font-size: 1em;
    }
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    left: 5%;

    .text {
      width: 65%;
    }
    .form {
      height: 500px;
      border: 0px solid black;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & input[type="submit"] {
        height: 35px;
        width: 65%;
      }

      & input[type="email"] {
        width: 90%;
        border-width: 1px;
        border-style: solid;
        border-color: red;
        border-image: none;
        height: 35px;
        text-align: center;
      }
    }
  }
`;
