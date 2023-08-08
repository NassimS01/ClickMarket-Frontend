import { css, styled } from "styled-components";

export const ButtonGlobal = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: var(--colorPrimary);
  /* transform: skew(-15deg); */
  border-radius: 10px;
  color: white;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: #ff2727;
    transition: 0.5s ease;
  }

  ${(card) =>
    card &&
    css`
      font-weight: 500;
    `}

  ${(gray) =>
    gray &&
    css`
      background-color: #2b333d;

      &:hover {
        &:hover {
          background-color: #2a335e;
          transition: 0.5s ease;
        }
      }
    `}
`;
