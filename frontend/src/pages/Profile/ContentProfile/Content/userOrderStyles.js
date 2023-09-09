import { styled } from "styled-components";

export const Order = styled.div`
  width: 95vw;
  min-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const OrderProduct = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 30px;
  min-width: 300px;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  margin-top: 1rem;

  .customer-info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    p {
      font-weight: 600;
    }
    span {
      font-size: 16px;
    }
  }

  p {
    font-weight: 500;
    font-size: 16px;
  }

  .product-name {
    display: flex;
    gap: 5px;
  }

  .product {
    font-weight: 600;
  }
  span {
    font-weight: 500;
    font-size: 16px;
  }

  .imgProductOrder {
    margin: auto 0;
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .infoProductCart {
    display: flex;
    align-items: center;
  }

  .infoProductOrder {
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
    margin-top: 15px;
    p,
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 425px) {
    .infoProductOrder {
      gap: 5px;
    }

    .subTotal p,
    .subTotal span {
      font-size: 16px;
    }

    .customer-code {
      flex-direction: column;
      gap: 0;
    }
  }

  @media only screen and (max-width: 320px) {
    .infoProductOrder {
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
