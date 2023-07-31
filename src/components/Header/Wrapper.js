import styled from "styled-components";

export const Wrapper = styled.section`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 5px 1.5%;
  border-bottom: 1px solid lightblue;
  z-index: 10000;

  img{
    width: 130px;
  }

  a{
    text-decoration: none;
    color: black;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: .9rem;
  }
  .social-links {
    display: flex;
    gap: 10px;
  }
  .social-links a {
    display: flex;
    font-size: 1.5rem;
    border: thin solid black;
    border-radius: 50%;
    padding: .5rem;
    justify-content: center;
    align-items: center;
  }
  .menu-btn,
  .search-btn {
    display: none;
    font-size: 24px;
  }
  .dropdown-container {
    position: relative;
  }
  .dropdown {
    position: absolute;
    top: 51px;
    display: none;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: #fff;
    border: 1px solid lightgray;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .dd-btn{
    background: transparent;
    border: none;
  }

  .dd-active {
    color: #333;
  }
  .expanded {
    display: flex;
  }

  @media screen and (max-width: 576px) {
    padding: 20px;

    .menu-btn,
    .search-btn {
      display: block;
      font-size: 2rem;
      border: none;
      background: transparent;
      transition: all ease 300ms;
    }
    .open {
      transform: rotate(90deg);
    }
    .nav-links {
      position: absolute;
      top: 100px;
      right: 0;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      background: #333;
      width: 100vw;
      height: 0;
      overflow: hidden;
      padding: 0px;
      box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.2);
      transition: all ease 300ms;
    }
    .show {
      height: initial;
      padding: 40px;
    }
    .nav-links a,
    .dd-btn {
      color: #fff;
      font-weight: 300;
    }
    .dropdown-container {
      text-align: center;
    }
    .dropdown {
      display: none;
      flex-direction: column;
      background: none;
      position: relative;
      padding: initial;
      border: none;
      border-radius: 0;
      box-shadow: none;
      top: initial;
      padding: 2rem 0 0 0;
    }
    .dropdown a {
      color: #fff;
      text-transform: lowercase;
    }
    .divider {
      display: none;
    }
    .dd-active {
      opacity: 80%;
    }
    .expanded {
      display: flex;
    }
    .social-links {
      gap: 20px;
    }

    .social-links a {
      font-size: 2rem;
    }
  }
`;