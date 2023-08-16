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
    transition: 0.2s ease;
    background-color: #d30707;
  }

  ${(props) =>
    props.green &&
    css`
      background-color: #4bbb44;

      &:hover {
        background-color: #3c9536;
      }
    `}

  ${(props) => props.buttoncard && css`
  
  `}
`;