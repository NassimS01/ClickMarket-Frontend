import { styled, css } from "styled-components";

export const ButtonGlobal = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;

  &:hover {
    transition: 0.2s ease;
    background-color: #d30707;
  }

  ${(props) =>
    props.gray &&
    css`
      background-color: gray;

      &:hover {
        background-color: #333;
      }
    `}

  ${(props) =>
    props.buttoncard &&
    css`
    `}
`;
