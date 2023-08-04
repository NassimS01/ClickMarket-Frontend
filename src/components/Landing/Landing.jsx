<<<<<<< Updated upstream
import falseDb from '../../products/dataProducts.json';
import CardComponent from '../Card/Card';
import { getRandomProducts } from '../../utils/functions';
import { ContainerCards, Container } from './LandingStyle';
import ExtraInfo from './ExtraInfo';
import Categories from './Categories';
import Slider from '../Slider/Slider';
=======
import falseDb from "../../../backend/db/dataProducts.json";
import CardComponent from "../Card/Card";
import { getRandomProducts } from "../../../backend/utils/functions";
import { ContainerCards, Container } from "./LandingStyle";
import Categories from "./Categories";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
>>>>>>> Stashed changes

const Landing = () => {

    const randomProducts = getRandomProducts(falseDb.productos, 4);
    return (
        <>
        <Container>
            <h3>Categorias destacadas</h3>
            <Categories/>
                <h3>Productos que pueden interesarte</h3>
            <ContainerCards>
                {randomProducts.map(el => <CardComponent key={el.id} name={el.name} price={el.price} img={el.img} descrip={el.descrip} discount={el.discount} />)}
            </ContainerCards>
            <ExtraInfo/>
        </Container>
        </>
    )
}

export default Landing;