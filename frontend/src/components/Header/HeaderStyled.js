
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 998;
  border-bottom: solid black 1px;
  background-color: #fff;

  &img {
    max-width: 150px;
    padding: 0.5rem;
    margin-left: 30px;
  }
`;