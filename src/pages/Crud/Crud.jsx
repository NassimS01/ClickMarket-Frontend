import { StyledCrud } from "./CrudStyled";
import PanelOne from "./PanelOne/PanelOne";
import { Outlet } from "react-router-dom";

const Crud = () => {
  return (
    <StyledCrud>
          <PanelOne />
          <Outlet />
    </StyledCrud>
  );
};

export default Crud;
