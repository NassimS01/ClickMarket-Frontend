import { styled } from "styled-components"

export const SideBar = styled.div`
  width: 100%;
  height: 90vh;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

.panel-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
}

.panel-link {
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.panel-icon {
  font-size: 30px;
}

.panel-text {
  display: none;

  @media (min-width: 800px) {
    display: block;
    padding-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #555;
  }
}

.active {
  color: crimson;
}

`