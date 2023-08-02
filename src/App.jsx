import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/footer";
// import Crud from "./pages/Crud/Crud";
// import NotFound from "./pages/NotFound/NotFound";
// import Footer from "./components/footer";
// import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Slider/>
      {/* <Category></Category> */}
      {/* <Crud /> */}
      <Landing/>
      <Footer/>
      {/* <Routes /> */}
      <GlobalStyles />
    </>
  );
}

export default App;
