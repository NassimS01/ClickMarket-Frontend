import styled from "styled-components";

export const PanelUno = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 200px;
  text-align: center;
  margin-top: 100px;

  .user-avatar {
    width: 50px;
    height: 50px;
  }

  & .userCircle {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    justify-content: center;
    font-size: 18px;
    color: #fff;
    transition: border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #18272f;
    position: relative;
    text-decoration: none;
  }

  .cardUser {
    width: 100%;
    height: 70px;
    padding: 0 30px;
    box-shadow: -1px -0px 7px 1px rgba(0, 0, 0, 0.14);
    border: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 15px;
    gap: 40px;

    a::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 4px;
      background-color: #ff443d;
      bottom: -3px;
      left: 0%;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;
