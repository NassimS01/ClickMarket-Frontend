import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  .overflow{
    display: flex;
    max-width: 1500px;
    gap: 10px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  

  .animation {
    transition: all ease 500ms;
  }

  .animation:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  @media only screen and (max-width: 1090px) {
    .overflow{
      overflow: auto;
    }
    .overflow::-webkit-scrollbar{
      display:none;
    }
  }
`;

export const Category = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;

  .category-icon {
    background-color: #fff;
    color: var(--colorPrimary);
    padding: 0.5rem;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    box-shadow: -5px 4px 10px 0px rgba(0, 0, 0, 0.14);
  }

  p {
    color: black;
    font-size: 1rem;
    margin-top: 3px;
  }

  
`;