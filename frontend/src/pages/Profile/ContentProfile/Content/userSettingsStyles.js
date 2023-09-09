import { styled } from "styled-components";

export const UserSettingsStyles = styled.div`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #efefef;
  border-radius: 20px;
  color: #000;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.14);
  z-index: 10;

  .container-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  label {
    font-weight: 500;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .input-email {
    width: 250px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    /* background-color: #f3f3f4; */
    color: #0d0c22;
    transition: 0.3s ease;
    margin-top: 10px;
  }

  .input {
    width: 250px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    padding-left: 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #f3f3f4;
    color: #0d0c22;
    transition: 0.3s ease;
    margin-top: 10px;
  }

  input[type="file"]::file-selector-button {
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    cursor: pointer;
    background-color: #f3f3f4;
    border-radius: 8px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    outline: none;
    border: none;
    margin-right: 16px;
    transition: background-color 200ms;
  }

  input[type="file"]::file-selector-button:hover {
    background-color: #f3f4f6;
  }

  input[type="file"]::file-selector-button:active {
    background-color: #e5e7eb;
  }

  .input::placeholder {
    color: #9e9ea7;
  }

  .input:focus,
  .input:hover {
    outline: none;
    border-color: rgba(234, 76, 137, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
  }

  .custum-file-upload {
    margin: 10px 0;
    height: 100px;
    width: 200px;
    display: flex;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
  }

  .custum-file-upload .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .icon svg {
    height: 80px;
    fill: rgba(75, 85, 99, 1);
  }

  .custum-file-upload .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custum-file-upload .text span {
    font-weight: 400;
    color: rgba(75, 85, 99, 1);
  }

  .custum-file-upload input {
    display: none;
  }
`;
