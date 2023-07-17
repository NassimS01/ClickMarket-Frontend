import { styled, css } from "styled-components";

export const ButtonGlobal = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 12px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;

  &:hover {
    transition: 0.2s ease;
    background-color: #e50101;
  }

  ${(props) =>
    props.gray &&
    css`
      background-color: gray;

      &:hover {
        background-color: #7c7777;
      }
    `}

  ${(props) =>
    props.buttoncard &&
    css`
      position: absolute;
      bottom: 18px;
      right: 20px;
      width: 180px;
      height: 35px;
    `}
`;
