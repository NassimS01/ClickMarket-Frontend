import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes/Routes";
import { loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllProducts());
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