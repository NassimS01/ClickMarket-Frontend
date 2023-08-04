import { Route,Routes,Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    /*<>
    <Main/>
    <Signup/>
    <Login/>
    </>*/
    <Routes>
      <Route path="/" exact element={<Signup/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/" exact element={<Navigate replace to ='/loging' />}/>
    </Routes>
  );
}

export default App;
