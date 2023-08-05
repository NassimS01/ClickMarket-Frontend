import { styled } from "styled-components";

export const Container = styled.div`
  padding: 1rem;

  .title {
    position: relative;
    font-weight: 500;
    font-size: 22px;
    margin: 60px 0;
    text-align: center;
  }

  .title::before {
    content: " ";
    position: absolute;
    width: 70px;
    height: 5px;
    bottom: -25%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    background-color: red;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;