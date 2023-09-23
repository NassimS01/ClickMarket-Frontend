import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  width: 100vw;
  height: 100vw;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  .title {
    margin-top: 0;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* padding: 30px; */
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 90vh;
    overflow-x : auto;
  }

  .input,
  .textarea {
    width: 300px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover,
  .textarea:focus,
  .textarea:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }
  .textarea {
    resize: none;
    padding-top: 10px;
    padding-left: 1.5rem;
    line-height: 15px;
    height: 100px;
  }

  h3 {
    text-align: center;
    padding: 5px 0;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 10px;

    .icon-text-container{
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .text-image{
        font-size: 12px;
      }
    }

    .product-image {
      height: 120px;
      width: 120px;
      object-fit: cover;
      margin: 1rem;
    }

    .hidden {
      display: none;
    }

    .image-icon {
      margin-top: 1.2rem;
    }

    .name-price-container,
    .discount-stock-container,
    .category-state-container,
    .price-container {
      gap: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .product-name-price {
      display: flex;
      flex-direction: column;
    }

    .category-state-container {
      display: flex;
      flex-direction: column;
    }

    .price-icon {
      position: absolute;
      left: 0;
      top: 30%;
    }

    .category-and-state-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 5px;

      select {
        width: 300px;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        padding-left: 1rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: 0.3s ease;
      }
    }

    .description-container,
    .category-state-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5px;
    }

    label {
      margin-bottom: 5px;
      width: 100px;
    }

    input,
    select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
`;
