import { styled } from "styled-components";

export const SectionCategory = styled.div`
  /* margin-top: 50px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  /* Input search */
  .searchContainer {
    display: flex;
    line-height: 28px;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 400px;
  }

  .input {
    width: 100%;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .iconSearch {
    position: absolute;
    left: 1rem;
    top: 1rem;
    transform: translate(-25%, -25%);
    fill: var(--colorPrimary);
    width: 1rem;
    height: 1rem;
  }

  /*  */

  & .categories {
    display: flex;
    width: 95vw;
  }

  @media only screen and (max-width: 768px) {
    & .categories {
      margin-top: 50px;
      flex-direction: column;
      align-items: center;
    }
  }
`;
