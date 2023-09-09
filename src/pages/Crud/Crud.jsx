import { StyledCrud } from "./CrudStyled";
import PanelOne from "./PanelOne/PanelOne";
import { Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Crud = () => {
  return (
    <StyledCrud>
          <PanelOne />
          <Outlet />
    </StyledCrud>
  );
};

export default Crud;
