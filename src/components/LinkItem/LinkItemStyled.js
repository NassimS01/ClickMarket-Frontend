import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkItemStyled = styled(NavLink)`
  font-size: 20px;
  line-height: 24px;
  color: #878787;
  text-decoration: none;

  &.active {
    border-bottom: 3px solid #ff443d;
    border-radius: 2px;
    transition: 0s;
  }

  &.active::before {
    content: "";
    width: 0;
    height: 0;
    transition: 0s;
    transform: scaleX(0);
  }
`;