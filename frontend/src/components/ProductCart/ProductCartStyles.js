import { styled } from "styled-components";

export const CartProduct = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  margin-top: 1rem;

  p {
    font-weight: 500;
    font-size: 16px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
  }

  .deleteProductCart {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .imgProductCart {
    margin: auto 0;
    width: 100px;
    height: 100px;

    img {
      width: 75%;
      height: 75%;
    }
  }

  .infoProductCart {
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 52vw;
    gap: 15px;
  }

  h2 {
    font-weight: 500;
    font-size: 22px;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 15px;
  }

  .subTotal {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 425px) {
    .infoProductCart {
      gap: 5px;
    }

    .subTotal p,
    .subTotal span {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 320px) {

    .infoProductCart {
      width: 42vw;
    }

    .quantity {
      gap: 10px;
    }


    .quantity p {
      font-size: 13px;
    }

    .subTotal p,
    .subTotal span {
      font-size: 13px;
    }
  }
`;