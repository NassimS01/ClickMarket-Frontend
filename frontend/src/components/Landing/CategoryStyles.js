import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin: 2rem auto;

  .animation {
    transition: all ease 500ms;
  }

  .animation:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

export const Category = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  color: red;
  padding: 0.5rem;
  width: 100px;
  border-radius: 10px;
  box-shadow: -3px 3px 2px 0px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: -3px 3px 5px 0px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: -3px 3px 5px 0px rgba(0, 0, 0, 0.14);

  .category-icon {
    font-size: 2rem;
  }

  p {
    color: black;
    font-size: 0.8rem;
  }
`;