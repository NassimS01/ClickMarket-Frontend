import { styled } from "styled-components";
import { GiNoodles, GiSteak, GiCharcuterie, GiMilkCarton, GiVacuumCleaner, GiSlicedBread} from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { PiBeerBottleDuotone, PiOrangeSliceDuotone } from "react-icons/pi";
import { BsSnow } from "react-icons/bs";

const Categories = () => {
    return ( 
        <>
        <Container>
            <Category className="animation">
                <AiOutlineHome className="category-icon"/>
                <p>Hogar</p>
            </Category>
            <Category className="animation">
                <PiBeerBottleDuotone className="category-icon"/>
                <p>Bebidas</p>
            </Category>
            <Category className="animation">
                <GiNoodles className="category-icon"/>
                <p>Comestibles</p>
            </Category>
            <Category className="animation">
                <GiSteak className="category-icon"/>
                <p>Carnes</p>
            </Category>
            <Category className="animation">
                <BsSnow className="category-icon"/>
                <p>Congelados</p>
            </Category>
            <Category className="animation">
                <GiCharcuterie className="category-icon"/>
                <p>Fiambres</p>
            </Category>
            <Category className="animation">
                <PiOrangeSliceDuotone className="category-icon"/>
                <p>Frutas</p>
            </Category>
            <Category className="animation">
                <GiMilkCarton className="category-icon"/>
                <p>Lacteos</p>
            </Category>
            <Category className="animation">
                <GiVacuumCleaner className="category-icon"/>
                <p>Limpieza</p>
            </Category>
            <Category className="animation">
                <GiSlicedBread className="category-icon"/>
                <p>Panaderia</p>
            </Category>
        </Container>
        </>
     );
}
 
export default Categories;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px; 
    margin: 2rem auto;

    .animation{
        transition: all ease 500ms;
    }

    .animation:hover{
        transform: translateY(-10px);
        cursor: pointer;
    }

    @media
`;

const Category = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F2EDED;
    color: red;
    padding: .5rem;
    width: 100px;
    border-radius: 10px;
    box-shadow: gray 5px 5px 5px;

    .category-icon{
        font-size: 2rem;
    }

    p{
        color: black;
        font-size: .8rem;
    }
`;