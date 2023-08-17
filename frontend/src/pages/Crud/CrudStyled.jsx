import styled, { css } from "styled-components";

export const StyledCrud = styled.div`
  /* width: 100vw; */
  min-height: 64vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-items: center;
  margin-bottom: 50px;

  ${(props) => props.user && css`
   margin-top: 110px;
  `}
`;