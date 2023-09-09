import { styled } from "styled-components";

export const ContainerSignup = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 1s;

  .signup_form_container {
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    border: 1px thin #edf5f3;
  }

  .registerBackground {
    position: relative;
    width: 100%;
    height: 93.9vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .registerBackground::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://hoydia.com.ar/wp-content/uploads/2021/11/supermercados-16032020.jpg");
    background-size: cover;
    /* background-attachment: fixed; */
    background-position: -50%;
    filter: blur(10px);
    z-index: -1;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #3bb19b; */
    background-color: var(--colorPrimaryHover);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .left h1 {
    margin-top: 0;
    color: white;
    font-size: 35px;
    align-self: center;
  }

  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .form_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form_container h1 {
    font-size: 40px;
    margin-top: 0;
  }

  .input {
    outline: none;
    border: 2px solid transparent;
    width: 370px;
    padding: 12px;
    border-radius: 10px;
    background-color: #edf5f3;
    margin: 5px 0;
    font-size: 14px;
  }

  input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .error_msg {
    width: 370px;
    padding: 15px;
    margin: 5px 0;
    font-size: 14px;
    background-color: #f34646;
    color: white;
    border-radius: 5px;
    text-align: center;
  }

  .white_btn,
  .green_btn {
    border: none;
    outline: none;
    padding: 12px 0;
    background-color: var(--colorPrimary);
    border-radius: 20px;
    width: 180px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    color: white;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }

  .green_btn {
    background-color: var(--colorPrimary);
    color: white;
    margin: 10px;
  }

  .avatar-label {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: rgb(55 65 81);
  }

  .avatar-container {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .avatar-span {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
    overflow: hidden;
  }

  .avatar-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 9999px;
  }

  .avatar-icon {
    height: 2rem;
    width: 2rem;
  }

  .label-file {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    padding: 1rem 0.5rem;
    border-width: 1px;
    border-color: rgb(209 213 219);
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    background-color: #fff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: rgb(55 65 81);
  }

  .label-file:hover {
    background-color: rgb(249 250 251);
  }
  .sr-only {
    display: none;
  }

  .input-password {
    position: relative;
  }

  .password-icon {
    position: absolute;
    cursor: pointer;
    right: 1%;
    top: 30%;
  }

  .input-checkbox{
    color: gray;
    margin: 1rem 0;
  }

  input[type="checkbox"]{
    transform: scale(1.5);
    margin-right: .5rem;
  }

  @media screen and (max-width: 660px) {
    .signup_form_container {
      width: 85%;
      flex-direction: column;
    }
    .left{
      border-radius: 9px 9px 0px 0px;
      & h1{
        margin-top: 0.5em;
      }
      & .white_btn{
        margin-bottom: 1em;
      }
    }
    .right{
      border-radius: 0px 0px 9px 9px;
    }

    .input{
      width: 265px;
    }
  }
`;


