import { styled } from "styled-components";

export const SectionCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin-bottom: 151px; */

  /* Input search */
  .filters {
    display: flex;
    line-height: 28px;
    align-items: center;
    flex-direction: column;
    width: 30%;
    gap: 30px;
  }

  .searchContainer {
    position: relative;
  }

  .input {
    position: relative;
    width: 300px;
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

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(186 30 26 / 10%);
  }

  .iconSearch {
    position: absolute;
    left: 1rem;
    top: 1rem;
    transform: translate(-25%, -25%);
    fill: var(--colorPrimary);
    width: 1rem;
    height: 1rem;
    z-index: 10;
  }

  /*  */

  & .categories {
    display: flex;
    width: 95vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .containerCards {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    max-width: 1300px;
    min-width: 1300px;
    min-height: 864px;
  }

  .paginationButtons {
    margin-top: 70px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }

  .title {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1440px) {
    .filters {
      margin-bottom: 20px;
    }
    .categories {
      flex-direction: column;
      align-items: center;
    }

    .containerCards {
      min-width: auto;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .paginationButtons {
      gap: 15px;
    }
  }
`;
