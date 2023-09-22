import { styled } from "styled-components";

export const ContainerContact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .contact-background {
    position: relative;
    width: 100%;
    height: 93.9vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-background::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("https://c1.wallpaperflare.com/preview/327/162/483/retail-grocery-supermarket-store.jpg");
    background-size: cover;
    background-position: -50%;
    filter: blur(10px);
    z-index: -1;
  }

  .container-all-contact {
    position: relative;
    width: 60%;
    background-color: #fff;
    border-radius: 6px;
    padding: 30px 60px 40px 40px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .container-all-contact .content-contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container-all-contact .content-contact .container-contact-left {
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    position: relative;
  }

  .content-contact .container-contact-left::before {
    content: "";
    position: absolute;
    height: 70%;
    width: 2px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--colorSecondary);
  }

  .content-contact .container-contact-left .details {
    margin: 14px;
    text-align: center;
  }

  .content-contact .container-contact-left .details .icon-contact {
    font-size: 30px;
    color: var(--colorPrimary);
    margin-bottom: 10px;
  }

  .content-contact .container-contact-left .details .topic {
    font-size: 18px;
    font-weight: 500;
  }

  .content-contact .container-contact-left .details .text-one .text-two {
    font-size: 14px;
    color: #afafb6;
  }

  .container-all-contact .content-contact .container-contact-right {
    width: 75%;
    margin-left: 75px;
  }

  .content-contact .container-contact-right .topic-text {
    font-size: 23px;
    font-weight: 600;
    color: var(--colorPrimary);
  }

  .errors {
    margin-left: 10px;
    color: var(--colorPrimary);
  }

  .container-contact-right .input-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 12px 0;
  }

  .container-contact-right .input-box input {
    height: 50px;
    width: 100%;
    border: none;
    font-size: 16px;
    background-color: #f0f1f8;
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
    outline: none;
  }

  .container-contact-right .input-box textarea {
    height: 150px;
    width: 100%;
    border: none;
    font-size: 16px;
    background-color: #f0f1f8;
    border-radius: 6px;
    padding: 12px;
    resize: none;
    outline: none;
  }

  .container-contact-right .message-box {
    min-height: 110px;
  }

  .container-contact-right .button {
    display: inline-block;
    margin-top: 6px;
  }

  .container-contact-right .button .button-send {
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 6px;
    padding: 8px 16px;
    background: var(--colorPrimary);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .input:focus,
  input:hover,
  textarea:focus,
  textarea:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(186 30 26 / 10%);
  }

  .button-send:hover {
    background: #5029bc;
  }

  @media (max-width: 950px) {
    .container-all-contact {
      width: 80%;
      padding: 30px 35px 40px 35px;
    }
  }

  @media (max-width: 820px) {
    .container-all-contact {
      margin: 40px 0;
      height: auto;
    }

    .container-all-contact .content-contact {
      flex-direction: column;
    }

    .container-all-contact .content-contact .container-contact-left {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .container-all-contact .content-contact .container-contact-left::before {
      display: none;
    }

    .container-all-contact .content-contact .container-contact-right {
      width: 100%;
      margin-left: 0;
    }
  }

  @media (max-width: 500px) {
    margin: 100px 0;
  }
`;
