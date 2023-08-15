import { styled } from "styled-components";

export const LeftContainer = styled.div`
    width: 30vw;
    border: thin solid black;

  .user-avatar{
    width: 250px;
    height: auto;
    border-radius: 50%;
  }

  .user-favs, .user-cart, .user-order, .user-settings{
    display: flex;
  }
`;