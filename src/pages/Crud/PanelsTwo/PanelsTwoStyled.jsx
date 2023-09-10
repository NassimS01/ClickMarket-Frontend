import styled from "styled-components";

export const PanelsTwoStyled = styled.section`
  width: 90%;
  height: 95%;
  border-radius: 10px;

  h2 {
    text-align: center;
    margin: 1.2em 0em 2em 0em;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    margin-top: 40px;
  } 
  
  .searchContainer {
    position: relative;
  }

  .input-search {
    /* position: relative; */
    min-width: 300px;
    max-width: 400px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: transparent;
    color: #0d0c22;
    transition: 0.3s ease;
    box-shadow: 0px 0px 7px 1px rgba(186 30 26/ 30%);
  }

  .input-search::placeholder {
    color: #9e9ea7;
  }

  .input-search:focus,
  .input-search:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(186 30 26 / 10%);
  }

  .icon-search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    fill: var(--colorPrimary);
    width: 1rem;
    height: 1rem;
    z-index: 10;
  }
`;
