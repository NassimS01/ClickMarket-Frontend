import styled from "styled-components";

export const AsideNews = styled.aside`
  background-color: white;
  max-width: 800px;
  width: 80%;
  height: 235px;
  border-radius: 47px;
  text-align: center;
  margin: 0 auto 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5em;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  border: 1px solid #efefef;

  & h2 {
    font-size: 23px;
    color: #2a333e;
  }

  & .text {
    width: 350px;
    font-size: 14px;
    font-weight: 600;
    color: #2a333e;
  }

  & .form {
    width: 60%;
    height: 60px;
    border-radius: 47px;
    border: 2px solid var(--colorPrimary);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0px 10px;

    & button[type="submit"] {
      color: white;
      font-weight: 500;
      width: 120px;
      height: 40px;
      border-radius: 60px;
      background-color: var(--colorPrimary);
      margin-top: 8px;
      margin-right: 2px;
      border-width: 0px;
      border-style: none;
      border-image: none;

      &:hover {
        cursor: pointer;
      }
    }

    & input[type="email"] {
      background-color: transparent;
      width: 325px;
      height: 40px;
      margin-top: 8px;
      border-radius: 50px;
      border-width: 0px;
      border-style: none;
      border-color: var(--colorPrimary);
      border-image: none;
      outline: none;
      font-size: 1em;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 60%;
    row-gap: 0.5rem;

    h2 {
      margin-top: 15px;
    }

    .text {
      width: 65%;
    }

    .form {
      height: 100px;
      border: 0px solid black;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & button[type="submit"] {
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

  @media screen and (max-width: 650px) {
    height: 300px;
  }

  @media screen and (max-width: 425px) {
    width: 80vw;
    height: 330px;

    & input[type="email"] {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      padding: 5px;
    }
  }
`;