import { ButtonGlobal } from "./components/ButtonGlobal/ButtonGlobal";
import CardComponent, { Card, ContainerCards } from "./components/Card/Card";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <ContainerCards>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </ContainerCards>
      <GlobalStyles></GlobalStyles>
    </>
  );
}

export default App;
