import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
   --colorPrimary: #BA1E1A;
   --colorPrimaryHover: #6E0B08;
   --colorSecondary: #FF443D;
   --colorSuccess: #1ABA52;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  .swal2-popup {
  border-radius: 10px;
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
    background-color: #FF443D;
  }

::-webkit-scrollbar-track
{
	border-radius: 5px;
	background-color: #fff;
}

::-webkit-scrollbar
{
	width: 7px;
	background-color: #ccc;
}

::-webkit-scrollbar-thumb
{
	border-radius: 5px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #ccc;
}

@media screen and (max-width: 680px){
  body{
    overflow-x: hidden;
  }
}
`;

export default GlobalStyles;
