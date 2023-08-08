import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import Crud from "../pages/Crud/Crud";
import PanelProducts from "../pages/Crud/PanelsTwo/PanelProducts";
import PanelUsers from "../pages/Crud/PanelsTwo/PanelUsers";
import PanelOrders from "../pages/Crud/PanelsTwo/PanelOrders";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Cart from "../pages/Cart/Cart"

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="categorias" element={<Category />} />
          <Route path="/panel-admin/*" element={<Crud />}>
            <Route path="products" element={<PanelProducts />} />
            <Route path="users" element={<PanelUsers />} />
            <Route path="orders" element={<PanelOrders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="carrito" element={<Cart />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
