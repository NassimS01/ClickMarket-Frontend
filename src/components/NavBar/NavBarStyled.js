import { styled } from "styled-components";

export const ContainerNavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 15vh;
  padding: 1rem 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    font-size: 2rem;
    color: #fff;
    transition: border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #18272f;
    position: relative;
    text-decoration: none;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #18272f;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  & button {
    display: none;
  }

  @media only screen and (min-width: 576px) {
    position: sticky;
    top: 0;
    display: flex;
    height: auto;
    background-color: transparent;

    .navbar-links {
      display: flex;
      width: 40%;
      justify-content: space-between;
      margin-right: auto;
      margin-left: auto;
    }

    .navbar-links a {
      font-size: 1rem;
      margin: auto 0.2rem;
      color: #000;
    }

    .navbar-links a:hover {
      color: #000;
    }

    .navbar-icons {
      display: flex;
      width: 10%;
      justify-content: space-between;
      margin-right: 30px;
    }

    .navbar-icons button {
      display: inline;
      font-size: 1.5rem;
      border: none;
      background-color: transparent;
      margin: auto 0.2rem;
      cursor: pointer;
    }
  }
`;
