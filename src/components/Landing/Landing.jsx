import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../utils/functions.js";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import Offerts from "./Offerts";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";


const Landing = () => {
  const {allProducts, isLoading} = useSelector((state)=> state.product);


  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <ContainerCards>
            {allProducts &&
              getRandomProducts(allProducts, 8).map((product) => (
                <CardComponent
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  discount={product.discount}
                  stock={product.stock}
                  img={product.images.url}
                />
              ))}
          </ContainerCards>
        )}
        <Offerts/>
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;
