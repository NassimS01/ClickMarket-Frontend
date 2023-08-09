import {
  GiNoodles,
  GiSteak,
  GiCharcuterie,
  GiMilkCarton,
  GiVacuumCleaner,
  GiSlicedBread,
} from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { PiBeerBottleDuotone, PiOrangeSliceDuotone } from "react-icons/pi";
import { BsSnow } from "react-icons/bs";
import { Container, Category } from "./CategoryStyles";

const Categories = () => {
  return (
    <>
      <Container>
        <Category className="animation">
          <Category className="category-icon">
            <AiOutlineHome size="2.5rem" />
          </Category>
          <p>Hogar</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <PiBeerBottleDuotone size="2.5rem" />
          </Category>
          <p>Bebidas</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiNoodles size="2.5rem" />
          </Category>
          <p>Comestibles</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiSteak size="2.5rem" />
          </Category>
          <p>Carnes</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <BsSnow size="2.5rem" />
          </Category>
          <p>Congelados</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiCharcuterie size="2.5rem" />
          </Category>
          <p>Fiambres</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <PiOrangeSliceDuotone size="2.5rem" />
          </Category>
          <p>Frutas</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiMilkCarton size="2.5rem" />
          </Category>
          <p>Lacteos</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiVacuumCleaner size="2.5rem" />
          </Category>
          <p>Limpieza</p>
        </Category>
        <Category className="animation">
          <Category className="category-icon">
            <GiSlicedBread size="2.5rem" />
          </Category>
          <p>Panaderia</p>
        </Category>
      </Container>
    </>
  );
};

export default Categories;