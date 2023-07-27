import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
// import NotFound from "./pages/NotFound/NotFound";
// import Footer from "./components/footer";
import Card from "./components/Card/Card";

import GlobalStyles from "./styles/GlobalStyles";
import Category from "./pages/Category/Category";

function App() {
  return (
    <>
      {/* <Category></Category> */}
      <Header />
      <Slider/>
      <Footer/>
      <GlobalStyles />
    </>
  );
}

export default App;
