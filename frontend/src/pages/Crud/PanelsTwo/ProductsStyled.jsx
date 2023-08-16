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

  .containerNames {
    width: 100vw;
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
    width: 90vw;
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
    }
  }
`;
