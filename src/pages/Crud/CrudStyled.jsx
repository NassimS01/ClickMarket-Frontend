import styled, { css } from "styled-components";

export const StyledCrud = styled.div`
  min-height: 64vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  ${(props) => props.user && css`
    margin-top: 110px;
  `}
`;