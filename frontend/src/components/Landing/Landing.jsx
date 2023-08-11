import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../../../backend/utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import { useState } from "react";

const Landing = () => {
  return (
    <>
      <Container>
        <h3 className="title">Categorias destacadas</h3>
        <Categories />
        <h3 className="title">Productos que pueden interesarte</h3>
        <ContainerCards></ContainerCards>
        <ExtraInfo />
      </Container>
    </>
  );
};

export default Landing;
