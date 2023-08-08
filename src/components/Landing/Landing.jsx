import falseDb from "../../products/dataProducts.json";
import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useState } from "react";

const Landing = () => {
  const randomProducts = getRandomProducts(falseDb.productos, 4);
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        <ContainerCards>
          {randomProducts.map((el) => (
            <CardComponent key={el.id} {...el} />
          ))}
        </ContainerCards>
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;
