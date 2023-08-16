import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
} from "react-router-dom";
import Crud from "../pages/Crud/Crud";
import Login from "../pages/Login/LoginPage";
import PanelProducts from "../pages/Crud/PanelsTwo/PanelProducts";
import PanelUsers from "../pages/Crud/PanelsTwo/PanelUsers";
import PanelOrders from "../pages/Crud/PanelsTwo/PanelOrders";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import Signup from "../pages/Signup/SignupPage";
import Cart from "../pages/Cart/Cart";
import Store from "../redux/store";
import {loadUser } from "../redux/actions/user";
import { getAllProducts } from "../redux/actions/product";
import ProtectedAdminRoute from "./ProtectedAdminRoute";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import BtnWishlist from "../pages/Profile/ContentProfile/BtnWishlist";
import BtnCart from "../pages/Profile/ContentProfile/BtnCart"
import BtnOrders from "../pages/Profile/ContentProfile/BtnOrders"
import BtnSettings from "../pages/Profile/ContentProfile/BtnSettings"

const Routes = () => {
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(getAllProducts());
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias/:categoria" element={<Category />} />

          {/* CRUD ADMIN */}
          <Route
            path="/panel-admin/*"
            element={
              <ProtectedAdminRoute>
                <Crud />
              </ProtectedAdminRoute>
            }
          >
            <Route
              path="products"
              element={
                <ProtectedAdminRoute>
                  <PanelProducts />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedAdminRoute>
                  <PanelUsers />
                </ProtectedAdminRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedAdminRoute>
                  <PanelOrders />
                </ProtectedAdminRoute>
              }
            />
          </Route>

          {/* PANEL USER */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route
              path="wishlist"
              element={
                <ProtectedRoute>
                  <BtnWishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <BtnCart />
                </ProtectedRoute>
              }
            />
            <Route
              path="orders"
              element={
                <ProtectedRoute>
                  <BtnOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="settings"
              element={
                <ProtectedRoute>
                  <BtnSettings />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="carrito" element={<Cart />} />
        </ReactDomRoutes>
      </Layout>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default Routes;
