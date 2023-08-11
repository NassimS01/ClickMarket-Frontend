import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 1rem 1rem 0 1rem;
  text-align: center;
  border-top: solid 1px black;


  & .logo-facebook{
    color: blue;
  }

  & .logo-github{
    color: gray;
  }

  & .logo-twitter{
    color: #09A4F7;
  }

  & .logo-linkedin{
    color: #086BCA;
  }


  & .container-footer{
    display: flex;
    justify-content: space-evenly;
    border-bottom: solid 1px black;
  }

  & .container-1{
    display: flex;
    flex-direction: column;
  }

  & .container-1 .social-icons-container-1{
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
  }

  & .logo{
    max-width: 200px;
  }

  & .container-2, .container-3, .container-4{
   text-align: left;
   display: flex;
   flex-direction: column;
  }

  & .container-2 a, .container-3 a, .container-4 a{
    color: #000;
    text-decoration: none;
    margin: auto .1rem;
    font-size: .8rem;
  }

  @media only screen and (max-width: 576px){
    & .container-footer{
      display:flex;
      flex-direction: column;
      align-items: center;
    }

    .logo{
      width: 150px;
    }

    .container-1 .social-icons-container-1{
      font-size: 1.5rem;
    }

    .container-2, .container-3, .container-4{
      text-align: center;
    }
    
  }
`;