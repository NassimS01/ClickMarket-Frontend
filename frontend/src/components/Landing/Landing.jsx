import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../../../backend/utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserCart, getUserWishlist } from "../../redux/actions/user";
import Loader from "../Loader/Loader";

const Landing = () => {
  const dispatch = useDispatch()
  const {allProducts, isLoading} = useSelector((state)=> state.product);


  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        {
          isLoading? (<Loader/>) :
          (<ContainerCards>
            {allProducts && allProducts.map((product) => (
              <CardComponent
              key={product._id}
              id={product._id}
              name={product.name}
              descrip={product.description}
              category={product.category}
              price={product.price}
              discount={product.discount}
              stock={product.stock}
              img={product.images.url}
          />
            ))}
          </ContainerCards>)
        }
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;
