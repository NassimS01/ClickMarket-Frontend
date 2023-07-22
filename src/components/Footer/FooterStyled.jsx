import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #2a333e;
  position: relative;

  & .capsule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    height: 260px;

    & .container-1 {
      width: 35%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 1.5em;

      & .logo {
        width: 115px;
        height: 35px;
      }

      & figure {
        width: 125px;
        height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-left: 0px;

        & .social-icon {
          width: 18px;
          height: 18px;
        }
      }
    }

    & .container-2 {
      & h2 {
        font-size: 22px;
        color: white;
      }

      & .contact {
        display: flex;
        flex-direction: row;
        color: white;
        margin-top: 1.8em;

        & .icon-contact {
          margin: 0px;
          margin-right: 1em;
        }

        & .gps {
          width: 13px;
          height: 17px;
        }

        & .phone {
          width: 15px;
          height: 16px;
        }

        & .messenge {
          width: 16px;
          height: 12px;
        }

        & .text {
          width: 270px;
          margin: 0px;
          text-decoration: none;
          color: white;
        }
      }
    }

    & .container-3 {
      width: 20%;
    }

    & .container-3,
    .container-4 {
      & h2 {
        color: white;
      }

      & ul {
        list-style-type: none;
        padding-inline-start: 0px;

        & a {
          display: block;
          margin-top: 1.6em;
          text-decoration: none;
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 1050px){
    .container-1{
      width: 28% !important;
    }
  }

  @media screen and (max-width: 920px){
    justify-content: initial;
    height: 800px;

    .capsule{
      margin-top: 5em;
    }

    .container-1, .container-2{
      width: 50% !important;
      margin-top: 2em;

    }  

    .container-3, .container-4{
      width: 50% !important;
      margin-top: 2em;
    }
  }

  @media screen and (max-width: 600px){
    height: 1100px;

    .container-1{
      width: 100% !important;
      height: 50% !important;
      align-items: center;
    }
    .container-2, .container-3, .container-4{
      width: 100% !important;

      & h2{
        width: 100%;
      }

      & ul{
        width: 100%;
      }
    }
  }

  & span {
    position: absolute;
    bottom: 1em;
    color: #ffffff;
  }
`;