import { styled } from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const FormField = styled.input`
  margin-bottom: 10px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: antiquewhite;
`;

export const FormButton = styled.button`
  width: 50%;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;
