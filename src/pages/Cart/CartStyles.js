import { styled } from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .cart {
    display: flex;
    gap: 20px;
  }

  .cartSectionLeft {
    width: 60vw;
    margin-bottom: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    
  }

  .cartSectionRigth {
    position: sticky;
    top: 100px;
    width: 450px;
    height: 400px;
    background-color: #fff;
    padding: 15px 20px;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border-radius: 20px;

    h2 {
      font-weight: 500;
    }
  }

  .infoOrden {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    height: 60%;
  }

  .infoOrden::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -15px;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background-color: var(--colorSuccess);
    margin: 0 auto;
  }

  .infoOrden::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--colorSuccess);
    margin: 0 auto;
  }

  .infoItem {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 400;
      font-size: 17px;
    }

    span {
      font-weight: 600;
      font-size: 17px;
    }
  }

  .ordenTotal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .infoItem {
      width: 100%;

      p {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }

  .productCart {
    position: relative;
    display: flex;
    width: 50vw;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
    border-radius: 20px;
  }

  .deleteProductCart {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .imgProductCart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    width: 200px;
    height: 150px;

    img {
      width: 75%;
      height: 75%;
    }
  }

  .infoProductCart {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 35vw;
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
    font-size: 18px;
  }

  .subTotal {
    display: flex;
    justify-content: space-between;

    p {
      font-weight: 500;
      font-size: 20px;
    }

    span {
      font-weight: 500;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1024px) {
    .cartSectionLeft {
      width: 80%;
    }

    .cartSectionRigth {
      width: 50%;
      margin-top: 40px;
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 768px) {

    margin-top: 40px;
    .cart {
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 80vw;
    }

    .cartSectionLeft {
      width: 100%;
    }

    .productCart {
      width: 100%;
    }

    .infoProductCart {
      width: 70vw;
    }

    .cartSectionRigth {
      width: 80vw;
      height: 300px;
      margin-bottom: 50px;
      margin-left: 0;
    }

    .infoOrden {
      height: 55%;
    }
  }
  @media screen and (max-width: 425px) {
    margin-top: 0px;

    height: auto;

    .cart {
      width: 95vw;
    }

    .cartSectionRigth {
      width: 95vw;
    }

    .productCart {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .imgProductCart {
      width: 75px;
      height: 75px;
    }

    .infoProductCart {
      gap: 5px;
      width: auto;
    }

    .cartSectionRigth {
      height: 310px;
      margin-bottom: 15px;
    }
  }
`;