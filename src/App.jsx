import Footer from "./components/footer";
import { ButtonGlobal } from "./components/GlobalButton/GlobalButton";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Footer></Footer>  
      <GlobalStyles />
      <ButtonGlobal>Agregar al carrito</ButtonGlobal>
    </>
  );
}

export default App;
