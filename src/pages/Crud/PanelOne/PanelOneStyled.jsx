import styled from "styled-components";

export const PanelUno = styled.section`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95%;
  border: 2px solid red;
  border-radius: 10px;
  background-color: whitesmoke;

  & .userCircle {
    width: 180px;
    height: 180px;
    cursor: pointer;
  }
`;
