import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loginBackground {
    position: relative;
    width: 100%;
    height: 93.9vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loginBackground::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://www.baring.com.ar/resources/original/supermercado-rosario-gondolas.jpg");
    background-size: cover;
    background-position: -50%;
    filter: blur(10px);
    z-index: -1;
  }

  .login_form_container {
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    border: 1px thin #edf5f3; 
  }

  .left {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: #3bb19b; */
    background-color: var(--colorPrimaryHover);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .right h1 {
    margin-top: 0;
    color: white;
    font-size: 2rem;
    align-self: center;
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

  .green_btn {
    /* background-color: #3bb19b; */
    background-color: var(--colorPrimary);
    color: white;
    margin: 10px;
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

  @media screen and (max-width: 768px){
    .login_form_container{
      width: 85%;
      flex-direction: column;
    }
    .input{
      width: 265px;
    }
    .right{
      border-radius: 0px 0px 9px 9px;
    }
    .left{
      border-radius: 9px 9px 0px 0px;
    }
  }
`;
