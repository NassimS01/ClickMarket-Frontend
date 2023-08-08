import { styled } from "styled-components";

export const ContainerNavBar = styled.nav`
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 15vh;
  padding: 1rem 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;
  
  & a{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin: 1rem auto;
        font-size: 2rem;
        color: #fff;
        transition: border-bottom 0.3s ease;
        border-bottom: 2px solid transparent;
        text-decoration: none;
  }

  & button{
    display: none;
  }

  @media only screen and (min-width: 576px) {
    position: sticky;
    top: 0;
    display: flex;
    height: auto;
    background-color: transparent;

    .navbar-links{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
    }

    .navbar-links a{
        font-size: 1rem;
        margin: auto .2rem;
        color: #000;
    }

    .navbar-icons{
        display: flex;
        width: 20%;
        justify-content: space-between;
    }

    .navbar-icons button{
        display: inline;
        font-size: 1.5rem;
        border: none;
        background-color: transparent;
        margin: auto .2rem;
        cursor: pointer;
    }
}
`;
