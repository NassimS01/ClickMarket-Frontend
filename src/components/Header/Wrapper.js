import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 5px 1.5%;
  z-index: 99;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.3);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  ${(props) =>
    props.headernone === "true" &&
    `
    display: none;
  `}

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    font-size: 18px;
    color: #fff;
    transition: border-bottom 0.3s ease;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #18272f;
    position: relative;
    text-decoration: none;
  }

  .logo {
    cursor: pointer;
  }

  a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #ff443d;
    bottom: -2.5px;
    left: 0%;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .active {
    border-bottom: 3px solid #ff443d;
    border-radius: 2px;
    transition: 0s;
  }

  .active::before {
    content: "";
    width: 0;
    height: 0;
    transition: 0s;
    transform: scaleX(0);
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 0.9rem;
  }
  .social-links {
    display: flex;
    gap: 10px;
  }

  .icon {
    color: var(--colorPrimary);
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

  .dd-btn {
    background: transparent;
    border: none;
  }

  .dd-active {
    color: #333;
  }
  .expanded {
    display: flex;
  }

  .social-links {
    margin-right: 15px;
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
      padding-bottom: 100px;
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

    .dropdown-content {
      z-index: 100;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .social-links a,
    .social-links button {
      padding: 8px;
    }
  }

  @media screen and (max-width: 768px) {
    .logo-click{
      width: 100px;
    }

    .nav-links a{
      font-size: 14px;
    }
  }
`;

export const ButtonLink = styled.button`
  position: relative;
  display: flex;
  font-size: 1.5rem;
  border-radius: 50%;
  border: none;
  border-radius: 50%;
  box-shadow: -5px 4px 10px 0px rgba(0, 0, 0, 0.14);
  /* padding: 0.5rem; */
  height: 50px;
  width: 50px;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  transition: transform 0.2s ease;

  ${(props) =>
    props.user &&
    css`
      height: 35px;
      width: 35px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.4;
      cursor: default;
    `}

  &:active {
    transform: scale(0.9);
  }

  .user-avatar {
    border-radius: 50%;
    width: 42px;
    height: 42px;
  }

  .dropdown-content {
    position: absolute;
    top: 100%;
    width: 130px;
  }

  .user-dropdown {
    display: flex;
    justify-content: center;
  }

  .btn-dropdown {
    background-color: var(--colorPrimary);
    color: white;
    padding: 0.3rem;
    margin: auto auto;
    border-radius: 10px;
    width: 100px;
    font-size: 14px;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  .container-buttons-user {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  span {
    position: absolute;
    font-size: 18px;
    top: -10px;
    right: -5px;
    color: var(--colorPrimary);
    padding: 1px 8px;
    border-radius: 50%;
    background-color: white;
  }

  @media screen and (max-width: 576px) {
    .dropdown-content {
      left: -105px;
    }
  }
`;
