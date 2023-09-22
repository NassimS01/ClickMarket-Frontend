import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes/Routes";
import { loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
      dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
