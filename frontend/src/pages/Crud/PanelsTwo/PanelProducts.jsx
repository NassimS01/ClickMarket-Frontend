import { PanelsTwoStyled } from "./PanelsTwoStyled";
import BtnModal from "../BtnAdd/Btn";
import Products from "./Products";

const PanelProducts = () => {
 
  return (
    <PanelsTwoStyled>
      <h2>Productos</h2>
      <BtnModal />
      <Products />
    </PanelsTwoStyled>
  );
};

export default PanelProducts;