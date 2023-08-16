import { styled } from "styled-components";

export const LeftContainer = styled.div`
    width: 20%;
    border: thin solid black;

  .user-avatar{
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  .user-favs, .user-cart, .user-order, .user-settings{
    display: flex;
  }
`;