import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes/Routes";
import { loadUser } from "./redux/actions/user";
import { getAllProducts } from "./redux/actions/product";
import { useDispatch } from "react-redux";


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
    </>
  );
}

export default App;