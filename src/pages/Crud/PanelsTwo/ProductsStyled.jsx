import styled from "styled-components";

export const TableStyled = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-bottom: 30px;
  max-width: 1000px;

  .paginationButtons {
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .user-active {
    width: 20%;
  }

  .user-name {
    width: 20%;
  }

  .user-email {
    width: 30%;
  }

  .user-rol {
    width: 5%;
  }

  .user-buttons {
    width: 10%;
  }

  @media only screen and (max-width: 1024px) {
    .user-name,
    .user-active {
      width: 12%;
    }

    .user-email {
      width: 37%;
    }

    .user-role {
      width: 12%;
    }

    .user-buttons {
      width: 10%;
    }
  }

  @media only screen and (max-width: 768px) {
    .user-name,
    .user-active {
      width: 10%;
    }

    .user-email {
      width: 37%;
    }

    .user-role {
      width: 10%;
    }
  }

  .containerNames {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: gray;
    font-weight: 500;
    max-width: 1300px;

    & .img-price-buttons {
      width: 100px;
    }

    & .name-description {
      width: 200px;
    }

    & .category {
      width: 70px;
    }
  }

  .container-info {
    max-width: 1300px;
    width: 89.4vw;
    height: 70px;
    background-color: white;
    box-shadow: -1px -0px 7px 1px rgba(0, 0, 0, 0.14);
    border: 1px solid #efefef;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5px;

    & .container-img {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .img {
      width: 60px;
      height: 60px;
    }

    & .name {
      width: 20%;
      font-weight: 500;
    }

    .description {
      width: 30%;
      font-weight: 500;
    }

    & .price {
      width: 10%;
      font-weight: 600;
    }
    .category {
      width: 20%;
      text-transform: capitalize;
      font-weight: 600;
    }

    & .buttons {
      width: 10%;
      display: flex;
      justify-content: center;
      gap: 15px;
      cursor: pointer;
    }

    .user-activeTrue {
      width: 20%;
      font-weight: 500;
      text-transform: capitalize;
      color: var(--colorPrimary);
    }

    .user-activeFalse {
      width: 20%;
      font-weight: 500;
      text-transform: capitalize;
      color: var(--colorSuccess);
    }

    .user-name {
      width: 20%;
      font-weight: 400;
    }

    .user-email {
      width: 30%;
      font-weight: 500;
    }

    .user-role {
      width: 5%;
      font-weight: 600;
    }

    .user-buttons {
      width: 10%;
    }

    @media only screen and (max-width: 1024px) {
      .user-name,
      .user-activeFalse,
      .user-activeTrue {
        width: 11%;
      }

      .user-email {
        width: 40%;
      }
      .user-role {
        width: 10%;
      }

      .user-buttons {
        width: 10%;
      }
    }

    @media only screen and (max-width: 768px) {
      .user-name,
      .user-activeFalse,
      .user-activeTrue {
        width: 10%;
      }

      .user-email {
        width: 40%;
      }

      .user-role {
        width: 10%;
      }
    }
  }

  @media screen and (max-width: 680px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;

    .containerNames {
      display: none;
    }
    .container-info {
      width: 280px;
      height: auto;
      background-color: white;
      box-shadow: -1px -0px 7px 1px rgba(0, 0, 0, 0.14);
      border: 1px solid #efefef;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 10px;

      & .container-img {
        width: 45%;
        align-items: normal;
        justify-content: normal;
      }

      & .img {
        margin: 2em 0em 0em 0.5em;
        width: 80px;
        height: 80px;
      }

      & .name {
        width: 50%;
        font-weight: 500;
        display: inline-block;
        position: relative;
        margin-left: 95px;
        top: -75px;
      }

      .description {
        width: 100%;
        font-weight: 500;
        position: relative;
        top: -30px;
      }

      & .price {
        width: 25%;
        position: relative;
        left: 130px;
        top: -50px;
        font-weight: 600;
      }
      .category {
        width: 100%;
        text-transform: capitalize;
        font-weight: 600;
        text-align: center;
        position: relative;
        top: -20px;
      }

      & .buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
        position: relative;
        top: -10px;
        cursor: pointer;
      }
    }
  }
`;
