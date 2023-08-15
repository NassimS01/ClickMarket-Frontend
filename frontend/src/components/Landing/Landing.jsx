import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../../../backend/utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/product";
import { getUserCart, getUserWishlist } from "../../redux/actions/user";

const Landing = () => {
  const {allProducts} = useSelector((state)=> state.product);
  const {user, userWishlist, userCart} = useSelector((state)=> state.user);
  const {isProductInWishlist} = useSelector((state)=> state.wishlist)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserWishlist());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);


  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        <ContainerCards>
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
        </ContainerCards>
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;
