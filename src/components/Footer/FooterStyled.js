import { styled } from "styled-components";

export const FooterStyled = styled.footer`
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

  & span {
    position: absolute;
    bottom: 1em;
    color: #ffffff;
  }
`;