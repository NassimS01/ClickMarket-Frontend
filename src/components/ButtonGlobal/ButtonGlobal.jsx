import { styled, css } from "styled-components";

export const ButtonGlobal = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: var(--colorPrimary);
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;

  &:hover {
    transition: 0.3s ease;
    background-color: #6e0b08;
  }

  ${(props) =>
    props.buttoncard &&
    css`
      background-color: var(--colorSecondary);
    `}

  ${(props) =>
    props.green &&
    css`
      background-color: var(--colorSuccess);

      &:hover {
        transition: 0.3s ease;
        background-color: #006e26;
      }
    `}

  ${(props) =>
    props.pagination &&
    css`
      background-color: var(--colorSecondary);
      width: 130px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: default;
    `}
`;
