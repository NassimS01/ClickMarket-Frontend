import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1300px;
  width: 65vw;
  margin: 5rem auto;
  border-radius: 20px;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  border: 1px solid #efefef;
  .container-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    margin: auto 0.5rem;
    padding: 1rem;
    width: 400px;
  }

  .container-info:nth-child(2)::after {
    content: "";
    position: absolute;
    height: 60%;
    width: 1px;
    left: 0;
    background-color: var(--colorSecondary);
    border-radius: 0px;
  }

  .container-info:nth-child(2)::before {
    content: "";
    position: absolute;
    height: 60%;
    width: 1px;
    right: 0;
    background-color: var(--colorSecondary);
    border-radius: 0px;
  }

  .container-info-icon {
    font-size: 4rem;
    margin-left: 8px;
    margin-bottom: 5px;
  }

  .title-extraInfo {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    margin-left: 10px;
    text-align: start;
    font-weight: 400;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }

  @media screen and (max-width: 576px) {
    flex-wrap: wrap;

    .container-info {
      margin: 0.5rem;
    }

    .container-info-icon {
      font-size: 4rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 425px) {
    width: 80vw;
    .container-info:nth-child(2)::before {
      height: 1px;
      width: 50%;
      top: 0;
      right: 25%;
    }
    .container-info:nth-child(2)::after {
      height: 1px;
      width: 50%;
      bottom: 0;
      left: 25%;
    }
  }
`;
