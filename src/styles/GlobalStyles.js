import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
   --colorPrimary: #ba1e1a
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

   .title {
    position: relative;
    font-weight: 500;
    font-size: 22px;
    margin: 50px 0;
    text-align: center;
  }

  .title::before {
    content: " ";
    position: absolute;
    width: 70px;
    height: 5px;
    bottom: -25%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    background-color: var(--colorPrimary);
  }

  /* body {
     color: #fff;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     height: 100vh;
  } */
`;

export default GlobalStyles;
