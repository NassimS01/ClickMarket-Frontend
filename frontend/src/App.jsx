import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes/Routes";
import Store from "./redux/store";
import {loadUser} from "./redux/actions/user"


function App() {
  useEffect(()=>{
    Store.dispatch(loadUser())
  }, [])
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;