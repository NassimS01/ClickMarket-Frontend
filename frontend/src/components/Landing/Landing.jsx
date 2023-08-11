import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../../../backend/utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../server";

const Landing = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${server}/products/get-all-products`).then((res) => {
            setData(res.data.products);
        })
    }, []);

    const randomProducts = getRandomProducts(data,4);

  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        <ContainerCards>
          {
            randomProducts.map(product => <CardComponent key={product._id} {...product}  img={product.images.url}/>)
          }
        </ContainerCards>
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;

// {/* <CardComponent key={product._id} name={product.name} price={product.price} descrip={product.description} discount={product.discount} */ }