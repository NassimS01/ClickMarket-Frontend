import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 1rem;
  text-align: center;
  box-shadow: 0px -2px 5px 0px rgba(0, 0, 0, 0.15);
  border-radius: 15px 15px 0;
  ${({ isLoading }) => isLoading && "pointer-events: none;"}
  ${(props) =>
    props.footernone === "true" &&
    `
    display: none;
  `}

  img {
    width: 200px;
  }

  & .logo-facebook {
    color: blue;
  }

  & .logo-github {
    color: gray;
  }

  & .logo-twitter {
    color: #09a4f7;
  }

  & .logo-linkedin {
    color: #086bca;
  }

  & h3 {
    text-align: center;
    position: relative;
    font-weight: 500;
    font-size: 22px;
  }

  & h3::before {
    content: " ";
    position: absolute;
    height: 4px;
    width: 30px;
    border-radius: 3px;
    bottom: 0;
    left: 50%;
    display: inline-block;
    transform: translateX(-50%);
    background-color: var(--colorSecondary);
  }

  & .container-footer {
    display: flex;
    justify-content: space-evenly;
  }

  & .container-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .container-1 .social-icons-container-1 {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
    font-weight: 400;
    gap: 10px;
  }

  & .logo {
    max-width: 200px;
  }

  & .container-2 h3,
  .container-3 h3,
  .container-4 h3 {
    text-align: center;
  }
  & .container-2,
  .container-3,
  .container-4 {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 250px;
  }

  .container-4 {
    width: 150px;
    align-items: center;
    justify-content: center;
  }

  & .container-2 a {
    text-decoration: none;
    margin: auto 0.1rem;
    color: #000;
  }

  & .container-2 p,
  .container-3 a,
  .container-4 a {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;
    color: #000;
    text-decoration: none;
    margin: auto 0.1rem;
    font-size: 1rem;
  }

  .qr {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 576px) {
    & .container-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }

    & .container-4 {
      justify-content: center;
    }

    .qr {
      height: 130px;
      width: 130px;
    }
    a {
      display: flex;
      align-items: center;
      gap: 7px;
    }
    p {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .logo {
      width: 150px;
    }

    .container-1 .social-icons-container-1 {
      font-size: 1.5rem;
    }

    .container-2,
    .container-3,
    .container-4 {
      text-align: center;
      gap: 5px;
    }
  }

  @media (max-width: 768px) {
    .container-footer .link{
      font-size: 12px;
    }

    .container-title{
      font-size: 18px;
    }

    .container-footer {
      gap: 30px;
    }
    .logo {
      width: 120px;
    }

    .container-1 .social-icons-container-1 {
      font-size: 25px;
    }

    .qr {
      height: 100px;
      width: 100px;
    }
  }
`;
