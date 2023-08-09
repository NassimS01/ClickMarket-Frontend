import styled from "styled-components";

export const StyledBtnCrud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;
  row-gap: 2em;
  margin-top: 6em;

  & a {
    border: 1px solid #444;
    width: 135px;
    height: 50px;
    text-align: center;
    text-decoration: none;
    color: black;
    padding: 8px 0px 8px 0px;
    border-radius: 4px;
    box-shadow: 2px 2px 1px #ccc;
  }

  & a:hover{
    background-color: #ccc;
  }

  .logout {
    font-size: 14px !important;
    width: 125px !important;
    margin-top: 6em !important;
  }
`;