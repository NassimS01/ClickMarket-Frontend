import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "../pages/Crud/Crud";
import PanelProducts from "../pages/Crud/PanelsTwo/PanelProducts";
import PanelUsers from "../pages/Crud/PanelsTwo/PanelUsers"
import PanelOrders from "../pages/Crud/PanelsTwo/PanelOrders"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>PaginaPrincipal</div>} />
        <Route path="/panel-admin/*" element={<Crud />}>
          <Route path="products" element={<PanelProducts />} />
          <Route path="users" element={<PanelUsers />} />
          <Route path="orders" element={<PanelOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
